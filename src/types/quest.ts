import { GenreType, LevelType } from './filters';

export type QuestListItem = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: LevelType;
  type: GenreType;
  peopleMinMax: [number, number];
};
