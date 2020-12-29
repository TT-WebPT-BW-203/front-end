import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postIngredients } from "../store/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const IngredientsForm = (props) => {
  console.log("props in the IngredientsForm: ", props);

  const { id } = useParams();

  const recipe = props.recipes.find((recipe) => recipe.id === Number(id));
  console.log("recipe params: ", recipe);

  const handleChange = (e) => {};

  return (
    <div>
      <form>
        <h3>Enter Ingredients:</h3>
        <input name="ingredient" />
        <Link to={`recipe/${id}/ingredients`}>
          <button>Add Ingredient</button>
        </Link>
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
