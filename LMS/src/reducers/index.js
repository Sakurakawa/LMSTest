import { combineReducers } from 'redux';
import CourseReducer from './reducer_course';
import AuthReducer from './reducer_auth';
import LoginReducer from './login';
// import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  courses: CourseReducer,
  auth: AuthReducer,
  login: LoginReducer
  // form:formReducer
});

export default rootReducer;
