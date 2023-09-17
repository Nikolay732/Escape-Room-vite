import { DateBookingQuestValue } from '../const';
import { QuestListItem } from './quest';

export type BookingInfoData = {
    id: string;
    location: Location;
    slots: Slots;
}
export type Slots = {
  today: Slot[];
  tomorrow: Slot[];
};

export type Slot = {
  time: string;
  isAvailable: boolean;
};

export type Location = {
  address: string;
  coords: [number, number];
};

export type BookingQuestData = {
    date: DateBookingQuest;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    placeId: string;
};

export type DateBookingQuest = typeof DateBookingQuestValue[keyof typeof DateBookingQuestValue];

export type BookedQuestData = {
  date: DateBookingQuest;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
  id: string;
  location: Location;
  quest: QuestListItem;
}
