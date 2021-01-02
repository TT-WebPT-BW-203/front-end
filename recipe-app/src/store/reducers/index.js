import { act } from "react-dom/test-utils";
import {
  START_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
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
  START_EDIT_INSTRUCTION,
  EDIT_INSTRUCTION_SUCCESS,
  EDIT_INSTRUCTION_FAIL,
  START_INSTRUCTION_DELETE,
  INSTRUCTION_DELETE_SUCCESS,
  INSTRUCTION_DELETE_FAIL,
} from "../actions/actionTypes";

const initialState = {
  error: "",
  isLoading: false,
  loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN: {
      return {
        ...state,
        loggedIn: false,
        isLoading: true,
        error: "",
        recipes: [],
        ingredients: [],
        instructions: [],
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        error: "",
        isLoading: false,
        loggedIn: true,
        userData: action.payload,
        userId: action.payload.user.id,
        username: action.payload.user.username,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        loggedIn: false,
      };
    }
    case START_SIGNUP: {
      return {
        ...state,
        loggedIn: false,
        isLoading: true,
        error: "",
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        error: "",
        data: action.payload,
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        error: action.payload,
        loggedIn: false,
        isLoading: false,
      };
    }
    case START_RECIPE:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case RECIPE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        recipes: [...action.payload],
      };
    case RECIPE_POST_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case START_GETTING_RECIPES: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case GET_RECIPES_SUCCESS: {
      return {
        ...state,
        recipes: [...action.payload],
        error: "",
        isLoading: false,
      };
    }
    case GET_RECIPES_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case START_POST_INGREDIENT: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case POST_INGREDIENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        ingredients: [...action.payload],
      };
    }
    case POST_INGREDIENT_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case START_UPDATE_RECIPE: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case UPDATE_RECIPE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        recipes: [...action.payload],
      };
    }
    case UPDATE_RECIPE_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case START_DELETE_RECIPE: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case DELETE_RECIPE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        recipes: action.payload,
      };
    }
    case DELETE_RECIPE_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case START_EDIT_INGREDIENT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EDIT_INGREDIENT_SUCCESS: {
      return {
        ...state,
        ingredients: [...action.payload],
        isLoading: false,
        error: "",
      };
    }
    case EDIT_INGREDIENT_FAIL: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case START_INGREDIENT_DELETE: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case DELETE_INGREDIENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        ingredients: [...action.payload],
      };
    }
    case DELETE_RECIPE_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case START_POST_INSTRUCTION: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case POST_INSTRUCTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        instructions: [...action.payload],
      };
    }
    case POST_INSTRUCTION_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case START_EDIT_INSTRUCTION: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case EDIT_INSTRUCTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        instructions: [...action.payload],
      };
    }
    case EDIT_INSTRUCTION_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case START_INSTRUCTION_DELETE: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case INSTRUCTION_DELETE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        instructions: [...action.payload],
      };
    }
    case INSTRUCTION_DELETE_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
