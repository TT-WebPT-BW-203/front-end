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
  START_GETTING_RECIPES,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
} from "./actionTypes";

export const logUser = (userData) => (dispatch) => {
  console.log("userData:", userData);
  dispatch({ type: START_LOGIN });
  axiosWithAuth()
    .post("api/users/login", userData)
    .then((res) => {
      console.log("response login in reducer: ", res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
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
    .post(`/api/recipes/user/${id}`, recipe)
    .then((res) => {
      dispatch({ type: RECIPE_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: RECIPE_POST_FAIL, payload: err });
    });
};

export const getUserRecipes = (id) => (dispatch) => {
  dispatch({ type: START_GETTING_RECIPES });
  axiosWithAuth()
    .get(`/api/recipes/user/${id}`)
    .then((res) => {
      dispatch({ type: GET_RECIPES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_RECIPES_ERROR, payload: err });
    });
};
