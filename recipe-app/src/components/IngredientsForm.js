import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postIngredients } from "../store/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Ingredient from "./Ingredient";

const IngredientsForm = (props) => {
  console.log("props in the IngredientsForm: ", props);
  const [ingredient, setIngredient] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  console.log("ingredientList", ingredientList);
  console.log("ingredient", ingredient);

  const { id } = useParams();

  const recipe = props.recipes.find((recipe) => recipe.id === Number(id));
  console.log("recipe params: ", recipe);

  const addToList = () => {
    setIngredientList([...ingredientList, ingredient]);
  };

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList();
    setIngredient("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter Ingredients:</h3>
        <input name="ingredient" value={ingredient} onChange={handleChange} />
        <button>Add Ingredient</button>
      </form>

      <Link to="/add_recipe">
        <p>&#60;&#60;Back</p>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    userId: state.userId,
  };
};
export default connect(mapStateToProps, { postIngredients })(IngredientsForm);
