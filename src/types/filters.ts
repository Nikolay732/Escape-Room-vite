import { GenreTypeValue, LevelTypeValue } from '../const';

export type FilterGenre = {
  text: string;
  type: GenreType;
  icon: {
    name: string;
    width: string;
    height: string;
  };
};

export type FilterLevel = {
  type: LevelType;
  text: string;
};

export type GenreType = typeof GenreTypeValue[keyof typeof GenreTypeValue];

export type LevelType = typeof LevelTypeValue[keyof typeof LevelTypeValue];

