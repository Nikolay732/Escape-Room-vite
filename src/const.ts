export const AppRoute = {
  Main: '/',
  Login: '/login',
  Contacts: '/contacts',
  Quest: '/quest/:questId',
  Booking: '/quest/:questId/booking',
  MyQuest: '/my-quests',
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
  Booking = 'BOOKING',
  Reservation = 'RESERVATION',
}

export const APIRoute = {
  Quests: '/quest',
  Login: '/login',
  Logout: '/logout',
  Reservation: '/reservation',
} as const;

export const PageNameValue = {
  Main: 'main',
  MyQuests: 'my-quests',
  Contacts: 'contacts',
  Login: 'login',
  Quest: 'quest',
  Booking: 'booking',
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
  Adventures: {
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

export const DateBookingQuestValue = {
  Today: 'today',
  Tomorrow: 'tomorrow',
} as const;

export const CITY = {
  title: 'Санкт-Петербург',
  lat: 59.93863,
  lng: 30.31413,
  zoom: 10,
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const MAP_SIZE = {
  bookingPage: {
    height: '529px',
    width: '890px',
    margin: 'auto',
  },
  contactsPage: {
    height: '370px',
    width: '617px',
    margin: 'auto',
  }
};

export const OFFICE_COORDS = {
  lat: 59.968456,
  lng: 30.31759,
};
