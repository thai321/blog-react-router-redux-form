import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=A1B2C3'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
      // make it payload.data
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
