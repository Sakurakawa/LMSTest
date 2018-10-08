import { FETCH_COURSE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_COURSE:
      console.log('###############', action.type);
      return action.payload;
    default:
      return state;
  }
}
