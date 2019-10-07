import mutationsTypes from '../mutations-types';

const mutations = {
  [mutationsTypes.RECEIVE_TEAMS](state, data) {
    state.teams = data
  }
};

const state = {
  teams: []
};

export default {
  state,
  mutations
};
