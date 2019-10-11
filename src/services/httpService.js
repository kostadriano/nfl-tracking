import axios from 'axios';
const APIKEY = process.env.VUE_APP_API_KEY;

export const httpService = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const nflApiService = axios.create({
  baseURL: 'https://api.sportsdata.io/v3/nfl/scores/json/',
  params: {
    key: APIKEY
  }
});
