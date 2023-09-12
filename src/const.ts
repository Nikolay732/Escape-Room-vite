export const AppRoute = {
  Main: '/',
  Login: '/login',
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

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Quests = 'QUESTS',
  User = 'USER',
}

export const APIRoute = {
  Quests: '/quest',
  Login: '/login',
  Logout: '/logout',
} as const;

export enum Pages {
  main = 'main',
  myQuest = 'my-quest',
  contacts = 'contacts'
}

