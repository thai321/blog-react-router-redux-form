import { combineReducers } from 'redux';
import PostsReducer from './reducer_post';
import { reducer as formReducer } from 'redux-form' ; // alias

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer // assume form-component is the piece of state
});

export default rootReducer;
