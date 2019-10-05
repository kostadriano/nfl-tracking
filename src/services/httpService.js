import axios from 'axios';
const APIKEY = 'YOURAPIKEY';

const httpService = axios.create({
  baseURL: 'https://api.sportsdata.io/v3/nfl/scores/json/',
  params: {
    key: APIKEY
  }
});

export default httpService;
