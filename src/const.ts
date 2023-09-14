export const AppRoute = {
  Main: '/',
  Login: '/login',
  Contacts: '/contacts',
} as const;

export const LevelTypeValue = {
  Any: 'any',
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
} as const;

export const GenreTypeValue = {
  All: 'all',
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi',
} as const;

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

export const PageNameValue = {
  Main: 'main',
  MyQuest: 'my-quest',
  Contacts: 'contacts',
  Login: 'login',
} as const;

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

export const FilterLevelValue = {
  Any: {
    type: 'any',
    text: 'Любой',
  },
  Easy: {
    type: 'easy',
    text: 'Лёгкий',
  },
  Medium: {
    type: 'medium',
    text: 'Средний',
  },
  Hard: {
    type: 'hard',
    text: 'Сложный',
  }
} as const;
