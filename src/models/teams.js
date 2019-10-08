import { httpService, nflApiService } from '../services/httpService';
import newId from 'uuid/v4'

export const fields = {
  FanDuelName: "Duel Name",
  City: "City",
  Name: "Name",
  Conference: "Conference",
  Division: "Division",
  FullName: "FullName",
  HeadCoach: "Head Coach",
  OffensiveScheme: "Offensive Scheme",
  DefensiveScheme: "Defensive Scheme"
}

export const stadiumFields = {
  Name: "Name",
  City: "City",
  State: "State",
  Capacity: "Capacity",
  PlayingSurface: "Playing Surface"
}

export const resetFields = (object) => Object.keys(object)
  .reduce((newObject, objectKey) => {
    newObject[objectKey] = "";

    return newObject;
  }, {})

export const getAllTeams = async () => {
  try {
    const { data } = await nflApiService.get('Teams')
    return data
  }
  catch (error) {
    console.error(error)
  }
}

export const addTeam = async (team) => {
  team.Key = newId()

  try {
    const { data } = await httpService.post('teams', team)
    return data
  }
  catch (error) {
    console.error(error)
  }
}
