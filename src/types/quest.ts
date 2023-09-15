import { GenreType, LevelType } from './filters';

export type QuestListItem = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number, number];
};

export type QuestLevel = Exclude<LevelType, 'any'>

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type QuestType = Exclude<GenreType, 'all'>;
