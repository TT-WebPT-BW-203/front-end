import React, { useEffect, useState } from "react";
import img_placeholder from "../../src/img_placeholder.png";
import { useParams, useHistory, Link } from "react-router-dom";
import {
  deleteRecipe,
  editIngredient,
  deleteIngredient,
} from "../store/actions";
import { connect } from "react-redux";
import Ingredient from "./Ingredient";
import {
  RecipeContainer,
  RecipeTitle,
  Button,
  RightContent,
  LeftContent,
  Image,
} from "../styles";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Recipe = (props) => {
  console.log();
  const history = useHistory();
  const params = useParams();

  const recipe = props.recipes.find((rec) => rec.id === Number(params.id));
  console.log(
    "The CURRENT RECIPE we are working on, by id taken from the params obj: ",
    recipe
  );

  return (
    <div>
      recipe component
      <h3>Recipe title will go here</h3>
      <p>Source will go here: </p>
      <div>
        <h3>Ingredient List here</h3>
        <p>will insert ingredient list here</p>
      </div>
      <div>
        <h3>instructions will go here</h3>
        <p>will insert instructions list here</p>
      </div>
      <div>
        <img alt="the image will go here" />
      </div>
      <div>
        <button>edit recipe</button>
        <button>delete recipe</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
    instructions: state.instructions,
  };
};

export default connect(mapStateToProps, {
  deleteRecipe,
  editIngredient,
  deleteIngredient,
})(Recipe);
