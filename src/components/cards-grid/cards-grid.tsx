import { QuestListItem } from '../../types/quest';
import { QuestCard } from '../quest-card/quest-card';

type CardsGridProps = {
  questCards: QuestListItem[];
}

export function CardsGrid ({questCards}: CardsGridProps) {
  return (
    <div className="cards-grid">
      {questCards.map((quest) => <QuestCard key={quest.id} quest={quest}/>)}
    </div>
  );
}
