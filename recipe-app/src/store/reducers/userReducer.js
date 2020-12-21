import { START_LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialState = {
  error: "",
  isLoading: false,
  loggedIn: false,
  user: {
    username: "",
    password: "",
    email: "",
  },
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
        loggedIn: true,
        isLoading: false,
        user: action.payload,
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
    default: {
      return state;
    }
  }
};
