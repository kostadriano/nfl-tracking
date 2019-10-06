import httpService from '../services/httpService';

export const fields = {
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

export const getAllTeams = async () => {
  try {
    const { data } = await httpService.get('Teams')

    return data
  }
  catch (error) {
    console.error(error)
  }
}
