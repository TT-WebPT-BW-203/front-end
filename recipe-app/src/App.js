import "./App.css";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AddRecipe from "./components/AddRecipe";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/login" render={() => <Login />} />
      <Route path="/signup" render={() => <SignUp />} />
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/add_recipe">
        <AddRecipe />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/ingredients">
        <Ingredients />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/instructions">
        <Instructions />
      </PrivateRoute>
    </div>
  );
}

export default App;
