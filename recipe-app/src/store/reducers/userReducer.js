const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //action to bring up user to the global state
    //action for post request at the submit
    default: {
      return state;
    }
  }
};
