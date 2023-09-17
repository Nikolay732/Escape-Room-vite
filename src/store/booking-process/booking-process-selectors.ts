import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getBookingInfo = (state: State) => state[NameSpace.Booking].bookingInfo;

export const getBookedQuests = (state: State) => state[NameSpace.Booking].bookingInfo;

export const getSelectedBookingPoint = (state: State) => state[NameSpace.Booking].selectedBookingPoint;
