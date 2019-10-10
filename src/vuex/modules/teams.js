import mutationsTypes from '../mutations-types';

const mutations = {
  [mutationsTypes.RECEIVE_TEAMS](state, data) {
    state.teams = data
  },
  [mutationsTypes.RECEIVE_MY_TEAMS](state, data) {
    state.myTeams = data
  },
  [mutationsTypes.ADD_TEAM](state, data) {
    state.myTeams.push(data)
  },
  [mutationsTypes.UPDATE_TEAM](state, { id, updatedTeam }) {
    state.myTeams = state.myTeams.map(team => {
      if (team.id === id) return updatedTeam

      return team
    })
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
