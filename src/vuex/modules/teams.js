import mutationsTypes from '../mutations-types';

const mutations = {
  [mutationsTypes.RECEIVE_TEAMS](state, data) {
    state.teams = data
  },
  [mutationsTypes.ADD_TEAM](state, data) {
    state.myTeams.push(data)
  }
};

const state = {
  teams: [],
  myTeams: []
};

export default {
  state,
  mutations
};
