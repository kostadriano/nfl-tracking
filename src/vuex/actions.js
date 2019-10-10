import mutations from './mutations-types';
import * as TeamsRepository from '../repositories/TeamRepository'

export const getTeams = async ({ commit }) => {
  const data = await TeamsRepository.getAllTeams()

  commit(mutations.RECEIVE_TEAMS, data)
}

export const getMyTeams = async ({ commit }) => {
  const data = await TeamsRepository.getMyTeams()

  commit(mutations.RECEIVE_MY_TEAMS, data)
}

export const addTeam = async ({ commit }, newTeam) => {
  const data = await TeamsRepository.addTeam(newTeam)

  commit(mutations.ADD_TEAM, data)
}

export const updateTeam = async ({ commit }, { id, team }) => {
  const data = await TeamsRepository.updateTeam(id, team)

  commit(mutations.UPDATE_TEAM, { id, updatedTeam: data })
}
