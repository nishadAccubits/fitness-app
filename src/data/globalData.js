import {
  faHouse,
  faMagnifyingGlass,
  faUserGroup,
  faMessage,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';

export const BottomBarLinks = [
  {
    icon: faHouse,
    name: 'Home',
    link: '/',
  },
  {
    icon: faMagnifyingGlass,
    name: 'Discover',
    link: '/discover',
  },
  {
    icon: faUserGroup,
    name: 'Spaces',
    link: '/spaces',
  },
  {
    icon: faMessage,
    name: 'Consult',
    link: '/consult',
  },
  {
    icon: faDumbbell,
    name: 'Routines',
    link: '/routines',
  },
];

export const headers = [
  {
    path: '/',
    title: '',
  },
  {
    path: '/discover',
    title: 'Discover',
  },
  {
    path: '/consult',
    title: 'Consult',
  },
  {
    path: '/spaces',
    title: 'Spaces',
  },
  {
    path: '/routines',
    title: 'My routines',
  },
];
