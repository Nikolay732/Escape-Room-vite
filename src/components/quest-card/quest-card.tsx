import { APIRoute } from '../../const';
import { QuestListItem } from '../../types/quest';
import { Link } from 'react-router-dom';

type QuestCardProps = {
  quest: QuestListItem;
}

export function QuestCard ({quest}: QuestCardProps) {
  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = quest;
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
      </div>
    </div>
  );
}
