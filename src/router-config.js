import Teams from './components/Teams';

export const routes = [
  {
    path: '/',
    redirect: '/teams'
  },
  {
    path: '/teams',
    component: Teams,
  },
];
