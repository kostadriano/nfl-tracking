import mutationsTypes from '../mutations-types';

const mutations = {
  [mutationsTypes.RECEIVE_TEAMS](state, data) {
    state = {
      ...state,
      data
    }
  }
};

const state = {
  teams: []
};

export default {
  state,
  mutations
};
