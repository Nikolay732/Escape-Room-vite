import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state: State) => state[NameSpace.User].authStatus;
