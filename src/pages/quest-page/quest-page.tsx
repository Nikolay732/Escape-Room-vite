import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { PageNameValue } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSelectedQuest, getSelectedQuestStatus } from '../../store/quests-data/quests-data-selectors';
import { useEffect } from 'react';
import { fetchQuestAction } from '../../store/quests-data/quests-data-thunk';
import { getGenreByRus, getLevelByRus } from '../../utils';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { changeBookingPointAction } from '../../store/booking-process/booking-process-slice';
import { LoadingPage } from '../loading-page/loading-page';

export function QuestPage () {
  const dispatch = useAppDispatch();
  const {questId} = useParams();
  const quest = useAppSelector(getSelectedQuest);
  const isSelectedQuestStatus = useAppSelector(getSelectedQuestStatus);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (questId) {
        dispatch(fetchQuestAction(questId));
      }
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, questId]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(changeBookingPointAction(null));
    }
    return () => {
      isMounted = false;
    };
  });

  if (!quest) {
    return <NotFoundPage/>;
  }

  if (isSelectedQuestStatus) {
    return (
      <LoadingPage/>
    );
  }

  const {title, level, type, peopleMinMax, description, coverImg, coverImgWebp } = quest;
  const levelByRus = getLevelByRus(level);
  const genreByRus = getGenreByRus(type);

  return (
    <div className="wrapper">
      <Header currentPage={PageNameValue.Quest}/>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${coverImgWebp}`}/>
            <img srcSet={`${coverImg}`} width="1366" height="768" alt={title}/>
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>
              {genreByRus}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{peopleMinMax[0]}&ndash;{peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>
                {levelByRus}
              </li>
            </ul>
            <p className="quest-page__description">
              {description}
            </p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={questId ? `/quest/${questId}/booking` : ''}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
