const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //action for post request at the submit
    default: {
      return state;
    }
  }
};
