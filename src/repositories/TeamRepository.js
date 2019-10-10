import * as Teams from '../models/teams'

export const getAllTeams = async () => await Teams.getAllTeams()

export const getMyTeams = async () => await Teams.getMyTeams()

export const addTeam = async (team) => {
  return await Teams.addTeam(team)
}

export const updateTeam = async (id, team) => {
  return await Teams.updateTeam(id, team)
}

export const deleteTeam = async (id) => {
  return await Teams.deleteTeam(id)
}
