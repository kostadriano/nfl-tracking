import * as Teams from '../models/teams'

export const getAllTeams = async () => await Teams.getAllTeams()

export const addTeam = async (team) => {
  return await Teams.addTeam(team)
}
