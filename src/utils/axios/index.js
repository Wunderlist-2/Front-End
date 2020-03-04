import axios from 'axios'

export const axiosWithBaseURL = () =>
  axios.create({ baseURL: 'https://wunderlist-b.herokuapp.com/api' })
