import { APIRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { deleteBookedQuestAction } from '../../store/booking-process/booking-process-thunks';
import { BookedQuestData } from '../../types/booking';
import { Link } from 'react-router-dom';
import { getDateTextByRus } from '../../utils';

type MyQuestCardProps = {
  bookedQuest: BookedQuestData;
}

export function MyQuestCard ({bookedQuest}: MyQuestCardProps) {
  const dispatch = useAppDispatch();
  const {date, time, location, quest} = bookedQuest;
  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = quest;

  const handleClickButton = () => {
    if (bookedQuest.id) {
      dispatch(deleteBookedQuestAction(bookedQuest.id));
    }
  };

  return (
    <div key={id} className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp}/>
          <img src={previewImg} width="344" height="232" alt={title}/>
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${APIRoute.Quests}/${id}`}>{title}</Link>
          <span className="quest-card__info">{`[${getDateTextByRus(date)}, ${time}. ${location.address}]`}</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peopleMinMax[0]}&ndash;{peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{level}
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={handleClickButton}>Отменить</button>
      </div>
    </div>
  );
}
