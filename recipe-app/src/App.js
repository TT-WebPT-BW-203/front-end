import "./App.css";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";
import IngredientsForm from "./components/IngredientsForm";
import InstructionsForm from "./components/InstructionsForm";
import UpdateForm from "./components/UpdateForm";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/login" render={() => <Login />} />
      <Route path="/signup" render={() => <SignUp />} />
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path={`/recipe/:id/update_recipe`}>
        <UpdateForm />
      </PrivateRoute>
      <PrivateRoute exact path={`/recipe/:id`}>
        <Recipe />
      </PrivateRoute>
      <PrivateRoute path={`/recipe/:id/ingredients_form`}>
        <IngredientsForm />
      </PrivateRoute>
      <PrivateRoute path={`/recipe/:id/instructions_form`}>
        <InstructionsForm />
      </PrivateRoute>
      <PrivateRoute path={`/add_recipe`}>
        <AddRecipe />
      </PrivateRoute>
    </div>
  );
}

export default App;
