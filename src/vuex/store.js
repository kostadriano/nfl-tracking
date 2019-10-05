import teams from './modules/teams';

import * as actions from './actions';
import * as getters from './getters';

export default {
  actions,
  getters,
  modules: {
    teams
  },
  strict: true,
};
