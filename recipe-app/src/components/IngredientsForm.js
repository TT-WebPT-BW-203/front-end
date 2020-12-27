import React, { useState } from "react";
import { useParams } from "react-router-dom";
import IngredientList from "./IngredientList";
import { postIngredients } from "../store/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const IngredientsForm = (props) => {
  console.log("props in the IngredientsForm: ", props);

  const [ingredient, setIngredient] = useState("");
  console.log("Ingredient in the IngredientsForm: ", ingredient);

  const [ingredientList, setIngredientList] = useState([]);

  const params = useParams();
  const recipe = props.recipes.find(
    (recipe) => recipe.id === Number(params.id)
  );
  console.log("recipe params: ", recipe);

  const addToIngredientsList = (ing) => {
    setIngredientList([...ingredientList, ing]);
  };

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addToIngredientsList(ingredient);
    //props.postIngredients()
    setIngredient("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter Ingredients:</h3>
        <input name="ingredient" value={ingredient} onChange={handleChange} />
        <button>Add Ingredient</button>
      </form>
      <IngredientList ingredientList={ingredientList} />
      <Link to="/instructions">
        <p>Save Ingredients and Continue to Instructions &#62;&#62;</p>
      </Link>

      <Link to="/add_recipe">
        <p>&#60;&#60;Back</p>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};
export default connect(mapStateToProps, { postIngredients })(IngredientsForm);
