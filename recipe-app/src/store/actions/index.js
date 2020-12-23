import { axiosWithAuth } from "../../utils/axiosWithAuth";

import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  START_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  START_RECIPE,
  RECIPE_POST_SUCCESS,
  RECIPE_POST_FAIL,
} from "./actionTypes";

export const getUser = (userData) => (dispatch) => {
  console.log("userData:", userData);
  dispatch({ type: START_LOGIN });
  axiosWithAuth()
    .post("api/users/login", userData)
    .then((res) => {
      console.log("response login in reducer: ", res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const signup = (signupData) => (dispatch) => {
  dispatch({ type: START_SIGNUP });
  axiosWithAuth()
    .post("/api/users/register", signupData)
    .then((res) => {
      console.log("res in the signup request: ", res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAIL, payload: err });
    });
};

export const addRecipe = (recipe, id) => (dispatch) => {
  dispatch({ type: START_RECIPE });
  axiosWithAuth()
    .post(`/api/recipes/user/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: RECIPE_POST_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: RECIPE_POST_FAIL });
    });
};

// const START_GETTING_INFO = "START_GETTING_INFO";
// const getInfo = () => (dispatch) => {
//   dispatch({ type: START_GETTING_INFO });
//   axiosWithAuth()
//     .get(`/api/users/login`)
//     .then((res) => console.log("res in the getInfo: ", res))
//     .catch((err) => console.log(err));
// };
