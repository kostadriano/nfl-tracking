import Teams from './components/Teams';
import ShowTeam from './components/Teams/Show'

export const routes = [
  {
    path: '/',
    redirect: '/teams'
  },
  {
    path: '/teams/:id',
    component: ShowTeam,
    props: true
  },
  {
    path: '/teams',
    component: Teams,
  },
];
