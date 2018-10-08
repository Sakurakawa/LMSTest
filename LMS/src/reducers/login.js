import { LOGIN } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      console.log('###############', action.type);
      return action.payload;
    default:
      return state;
  }
}
