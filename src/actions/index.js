import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post'; // for posts_show component
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=A1B2C3'

// for posts_index to show all the posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
      // make it payload.data
  return {
    type: FETCH_POSTS,
    payload: request //[post1, post2,... ]
  };
}

// for create a post --> posts_create component
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback() );
  return {
    type: CREATE_POST,
    payload: request
  };
}

// for posts_show component to show a post from its id
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request // one post with its id
  }
}


export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then( () => callback() );

  return {
    type: DELETE_POST,
    payload: id // return id is a good idea, because we don't need the post anymore
  }
}
