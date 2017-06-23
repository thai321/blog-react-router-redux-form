import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions/index';

// state here, key is the id of the post, and value is the post themself
export default function (state={}, action) {
  switch(action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); // remove post and its id
      // from network
    case FETCH_POST:
    //   // const post = action.payload.data
    //   // const new State =  { ...state };
    //   // newState[post.id] = post;
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      // console.log(action.payload.data); // [post1, post2,... ]
      return _.mapKeys(action.payload.data, 'id');
      // [ 4: {post4}]
    default:
      return state;
  }
}
