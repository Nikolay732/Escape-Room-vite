import { QuestListItem } from '../../types/quest';
import { QuestCard } from '../quest-card/quest-card';

type CardsGridProps = {
  questList: QuestListItem[];
}

export function CardsGrid ({questList: questCards}: CardsGridProps) {
  return (
    <div className="cards-grid">
      {questCards.map((quest) => <QuestCard key={quest.id} quest={quest}/>)}
    </div>
  );
}
