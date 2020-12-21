import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  START_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./actionTypes";

export const getUser = (userData) => (dispatch) => {
  console.log("userData:", userData);
  dispatch({ type: START_LOGIN });
  axiosWithAuth()
    .post("api/users/login", userData)
    .then((res) => {
      console.log("response login in reducer: ", res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const signup = (signupData) => (dispatch) => {
  dispatch({ type: START_SIGNUP });
  axios
    .post("/api/users/register", signupData)
    .then((res) => {
      console.log("res in the signup request: ", res);
    })
    .catch((err) => console.log(err));
};
