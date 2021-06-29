import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import meeting from './meeting';

export default combineReducers({
  alert,
  auth,
  meeting,
});
