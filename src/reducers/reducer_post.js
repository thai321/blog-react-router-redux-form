import _ from 'lodash'
import { FETCH_POSTS } from '../actions/index';


export default function (state={}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // console.log(action.payload.data); // [post1, post2 ]
      return _.mapKeys(action.payload.data, 'id');
      // [ 4: {post4}]
    default:
      return state;
  }
}