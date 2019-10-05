import mutations from './mutations-types';

export const receiveTeams = ({ commit }, data) => commit(mutations.RECEIVE_TEAMS, data);
