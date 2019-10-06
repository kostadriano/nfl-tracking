import mutations from './mutations-types';
import * as TeamsRepository from '../repositories/TeamRepository'

export const getTeams = async ({ commit }) => {
  const data = await TeamsRepository.getAllTeams()

  commit(mutations.RECEIVE_TEAMS, data)
}
