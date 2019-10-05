import httpService from '../services/httpService';

export const getAllTeams = async () => {
  try {
    const { data } = await httpService.get('Teams')

    return data
  }
  catch (error) {
    console.error(error)
  }
}
