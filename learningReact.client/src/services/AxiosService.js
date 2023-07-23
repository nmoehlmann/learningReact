import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const youtube = Axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3/search',
  timeout: 8000,
  params: {
    'apiKey': 'AIzaSyBwRZZ7gevJRzaj4tSKIoI6MdUvpFeUckc'
  }
})
api.defaults.headers.authorization = JSON.parse(localStorage.getItem('user-token'))