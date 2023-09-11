
export const AppRoute = {
  Main: '/',
} as const;

export enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum Type {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export enum NameSpace {
  Quests = 'QUESTS',
}

export const APIRoute = {
  Quests: '/quest',
}as const;
