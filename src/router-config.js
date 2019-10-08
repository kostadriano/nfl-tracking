import Teams from './components/Teams';
import ShowTeam from './components/Teams/Show';
import NewTeam from './components/Teams/New';

export const routes = [
  {
    path: '/',
    redirect: '/teams'
  },
  {
    path: '/teams',
    component: Teams,
  },
  {
    path: '/teams/new',
    component: NewTeam
  },
  {
    path: '/teams/:id',
    component: ShowTeam,
    props: true
  }
];
