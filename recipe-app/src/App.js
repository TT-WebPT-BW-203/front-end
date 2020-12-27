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

import { Route, Switch } from "react-router-dom";
import UpdateForm from "./components/UpdateForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/login" render={() => <Login />} />
      <Route path="/signup" render={() => <SignUp />} />
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
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
      <PrivateRoute path="/ingredients">
        <IngredientsForm />
      </PrivateRoute>
      <PrivateRoute path="/ingredients/ingredients_list">
        <IngredientList />
      </PrivateRoute>
      <PrivateRoute path="/instructions">
        <Instructions />
      </PrivateRoute>
    </div>
  );
}

export default App;
