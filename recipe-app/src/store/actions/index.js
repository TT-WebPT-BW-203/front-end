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
  START_POST_INGREDIENT,
  POST_INGREDIENT_SUCCESS,
  POST_INGREDIENT_FAIL,
  START_UPDATE_RECIPE,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAIL,
  START_DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAIL,
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

export const postIngredients = (recId, ingredient) => (dispatch) => {
  dispatch({ type: START_POST_INGREDIENT });
  axiosWithAuth()
    .post(`/api/recipes/${recId}/ingredients`, ingredient)
    .then((res) => {
      console.log("res in the post ingredient: ", res.data);
      dispatch({ type: POST_INGREDIENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_INGREDIENT_FAIL });
    });
};

export const updateRecipe = (id, updatedRecipe) => (dispatch) => {
  console.log("updated recipe: ", updatedRecipe);
  dispatch({ type: START_UPDATE_RECIPE });
  axiosWithAuth()
    .put(`/api/recipes/${id}`, updatedRecipe)
    .then((res) => {
      console.log("res in the update recipeByID", res);
      dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATE_RECIPE_FAIL, payload: err });
    });
};

export const deleteRecipe = (id) => (dispatch) => {
  dispatch({ type: START_DELETE_RECIPE });
  axiosWithAuth()
    .delete(`/api/recipes/${id}`)
    .then((res) => {
      console.log("res in the delete: ", res);
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: DELETE_RECIPE_FAIL, payload: err });
    });
};
