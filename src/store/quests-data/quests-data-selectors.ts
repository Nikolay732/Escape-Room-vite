import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getQuests = (state: State) => state[NameSpace.Quests].questList;
