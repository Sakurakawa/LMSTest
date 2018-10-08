import axios from 'axios';

export const FETCH_COURSE = 'fetch_course';
export const CHECK_AUTH = 'check_auth';
export const LOGIN = 'login';

const ROOT_URL = '/lms/json/learning/courseDetail';

export function fetchCourse(id) {
  const request = axios.get(`${ROOT_URL}?courseId=${id}`);
  console.log('post');
  console.log(request);
  return {
    type: FETCH_COURSE,
    payload: request
  };
}

export const checkAuth = () => {
  return {
    type: CHECK_AUTH,
    payload: 'asd'
  };
};

export const login = () => async dispatch => {
  const res = await axios.get(`/lms/json/learning/listAllCourse`);
  console.log(res);
  return dispatch({
    type: FETCH_COURSE,
    payload: res.data
  });
};

// export function login() {
//   const request = axios.get(
//     `/lms/json/learning/listAllCourse?_=1533174644998l`
//   );
//   console.log('bbb');
//   console.log(request);
//   return {
//     type: LOGIN,
//     payload: aza
//   };
// }
