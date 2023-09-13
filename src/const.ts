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
  Main = 'main',
  MyQuest = 'my-quest',
  Contacts = 'contacts',
  Login = 'login',
}

export const FilterGenreValue = {
  All: {
    text: 'Все квесты',
    type: 'all',
    icon: {
      name: 'icon-all-quests',
      width: '26',
      height: '30',
    },
  },
  Adventure: {
    text: 'Приключения',
    type: 'adventures',
    icon: {
      name: 'icon-adventure',
      width: '36',
      height: '30',
    },
  },
  Horror: {
    text: 'Ужасы',
    type: 'horror',
    icon: {
      name: 'icon-horror',
      width: '30',
      height: '30',
    },
  },
  Mystic: {
    text: 'Мистика',
    type: 'mystic',
    icon: {
      name: 'icon-mystic',
      width: '30',
      height: '30',
    },
  },
  Detective: {
    text: 'Детектив',
    type: 'detective',
    icon: {
      name: 'icon-detective',
      width: '40',
      height: '30',
    },
  },
  SciFi: {
    text: 'Sci-fi',
    type: 'sci-fi',
    icon: {
      name: 'icon-sci-fi',
      width: '28',
      height: '30',
    },
  },
} as const;
