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
  START_EDIT_INGREDIENT,
  EDIT_INGREDIENT_SUCCESS,
  EDIT_INGREDIENT_FAIL,
  START_POST_INSTRUCTION,
  POST_INSTRUCTION_SUCCESS,
  POST_INSTRUCTION_FAIL,
  START_INGREDIENT_DELETE,
  DELETE_INGREDIENT_SUCCESS,
  DELETE_INGREDIENT_FAIL,
  START_EDIT_INSTRUCTION,
  EDIT_INSTRUCTION_SUCCESS,
  EDIT_INSTRUCTION_FAIL,
  START_INSTRUCTION_DELETE,
  INSTRUCTION_DELETE_SUCCESS,
  INSTRUCTION_DELETE_FAIL,
  START_GET_INSTRUCTION,
  GET_INSTRUCTION_FAIL,
  GET_INSTRUCTION_SUCCESS,
} from "./actionTypes";

export const logUser = (userData) => (dispatch) => {
  dispatch({ type: START_LOGIN });
  axiosWithAuth()
    .post("api/users/login", userData)
    .then((res) => {
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
      //try deleting this line below
      return res.data;
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
      dispatch({ type: POST_INGREDIENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_INGREDIENT_FAIL, payload: err });
    });
};

export const updateRecipe = (id, updatedRecipe) => (dispatch) => {
  dispatch({ type: START_UPDATE_RECIPE });
  axiosWithAuth()
    .put(`/api/recipes/${id}`, updatedRecipe)
    .then((res) => {
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
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: DELETE_RECIPE_FAIL, payload: err });
    });
};

export const editIngredient = (id, ingredient) => (dispatch) => {
  dispatch({ type: START_EDIT_INGREDIENT });
  axiosWithAuth()
    .put(`/api/ingredients/${id}`, ingredient)
    .then((res) => {
      dispatch({ type: EDIT_INGREDIENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EDIT_INGREDIENT_FAIL, payload: err });
    });
};

export const deleteIngredient = (id) => (dispatch) => {
  dispatch({ type: START_INGREDIENT_DELETE });
  axiosWithAuth()
    .delete(`/api/ingredients/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_INGREDIENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: DELETE_INGREDIENT_FAIL, payload: err });
    });
};

export const postInstructions = (id, instruction) => (dispatch) => {
  console.log(instruction);
  dispatch({ type: START_POST_INSTRUCTION });
  axiosWithAuth()
    .post(`/api/recipes/${id}/instructions`, instruction)
    .then((res) => {
      dispatch({ type: POST_INSTRUCTION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_INSTRUCTION_FAIL, payload: err });
    });
};

export const putInstructions = (id, instruction) => (dispatch) => {
  dispatch({ type: START_EDIT_INSTRUCTION });
  axiosWithAuth()
    .put(`/api/instructions/${id}`, instruction)
    .then((res) => {
      dispatch({ type: EDIT_INSTRUCTION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EDIT_INSTRUCTION_FAIL, payload: err });
    });
};

export const deleteInstruction = (id) => (dispatch) => {
  dispatch({ type: START_INSTRUCTION_DELETE });
  axiosWithAuth()
    .delete(`/api/instructions/${id}`)
    .then((res) => {
      dispatch({ type: INSTRUCTION_DELETE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: INSTRUCTION_DELETE_FAIL, payload: err });
    });
};

export const getInstructionById = (id) => (dispatch) => {
  dispatch({ type: START_GET_INSTRUCTION });
  axiosWithAuth()
    .get(`/api/instructions/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_INSTRUCTION_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: GET_INSTRUCTION_FAIL, payload: err });
    });
};
