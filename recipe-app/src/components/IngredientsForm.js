import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { postIngredients } from "../store/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const IngredientsForm = (props) => {
  console.log("props in the IngredientsForm: ", props);
  const [ingredient, setIngredient] = useState({
    name: "",
  });
  const [ingredientList, setIngredientList] = useState([]);
  console.log("ingredientList", ingredientList);
  console.log("ingredient", ingredient);

  const { id } = useParams();
  const history = useHistory();

  const recipe = props.recipes.find((recipe) => recipe.id === Number(id));
  console.log("recipe params: ", recipe);

  const addToList = () => {
    setIngredientList([...ingredientList, ingredient]);
  };

  const handleChange = (e) => {
    setIngredient({ name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList();
    props.postIngredients(recipe.id, ingredient);
    setIngredient({ name: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter Ingredients:</h3>
        <input
          name="ingredient"
          value={ingredient.name}
          onChange={handleChange}
        />
        <button>Add Ingredient</button>
      </form>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Save Ingredients
      </button>
      {/* to move later */}
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
