import Teams from './components/Teams';
import ShowTeam from './components/Teams/Show';
import NewTeam from './components/Teams/New';
import EditTeam from './components/Teams/Edit';

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
    path: '/teams/:id/edit',
    component: EditTeam,
    props: true
  },
  {
    path: '/teams/:id',
    component: ShowTeam,
    props: true
  }
];
