import {
  START_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  START_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../actions/actionTypes";

const initialState = {
  error: "",
  isLoading: false,
  loggedIn: false,
  data: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN: {
      return {
        ...state,
        loggedIn: false,
        isLoading: true,
        error: "",
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        error: "",
        isLoading: false,
        loggedIn: true,
        message: "",
        data: action.payload,
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
    default: {
      return state;
    }
  }
};
