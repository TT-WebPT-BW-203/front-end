import "./App.css";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";
import IngredientsForm from "./components/IngredientsForm";
import IngredientList from "./components/IngredientList";
import Instructions from "./components/Instructions";
import UpdateForm from "./components/UpdateForm";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/login" render={() => <Login />} />
      <Route path="/signup" render={() => <SignUp />} />

      <Switch>
        <PrivateRoute exact path="/recipe/:id/update_recipe">
          <UpdateForm />
        </PrivateRoute>
        <PrivateRoute path="/recipe/:id">
          <Recipe />
        </PrivateRoute>
      </Switch>
      <PrivateRoute path="/add_recipe">
        <AddRecipe />
      </PrivateRoute>
      <PrivateRoute exact path="/recipe/:id/ingredients">
        <IngredientsForm />
      </PrivateRoute>
      <PrivateRoute exact path="/instructions/:id">
        <Instructions />
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </div>
  );
}

export default App;
