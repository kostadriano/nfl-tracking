import mutations from './mutations-types';
import * as TeamsRepository from '../repositories/TeamRepository'

export const getTeams = async ({ commit }) => {
  const data = await TeamsRepository.getAllTeams()

  commit(mutations.RECEIVE_TEAMS, data)
}

export const addTeam = async ({ commit }, newTeam) => {
  const data = await TeamsRepository.addTeam(newTeam)

  commit(mutations.ADD_TEAM, data)
}
