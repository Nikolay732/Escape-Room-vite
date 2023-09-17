import { BookedQuestData } from '../../types/booking';
import { MyQuestCard } from '../my-quest-card/my-quest-card';

type MyQuestCardsGridProps = {
  questList: BookedQuestData[];
}

export function MyQuestCardsGrid ({questList}: MyQuestCardsGridProps) {
  return (
    <div className="cards-grid">
      {questList.map((quest) => <MyQuestCard key={quest.id} bookedQuest={quest}/>)}
    </div>
  );
}
