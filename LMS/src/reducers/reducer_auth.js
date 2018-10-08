import { CHECK_AUTH } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case CHECK_AUTH:
      //const post=action.payload.data;
      //const newState={...state};
      //newState[post.id]=post;
      //return newState;
      console.log('###############', action.payload);
      return { ...state };
    default:
      return state;
  }
}
