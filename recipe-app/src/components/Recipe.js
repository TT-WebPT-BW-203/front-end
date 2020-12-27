import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteRecipe } from "../store/actions";
import { connect } from "react-redux";

const Recipe = (props) => {
  console.log("props in the Recipe component: ", props);
  const history = useHistory();
  const params = useParams();

  const recipe = props.recipes.find((rec) => rec.id === Number(params.id));
  return (
    <div>
      Title: <h3>{recipe.title}</h3>
      <p>Source: {recipe.source}</p>
      <h4>Ingredients: </h4>
      {/* map list of Ingredients */}
      <h4>Instructions: </h4>
      <img alt="dish" />
      <button
        onClick={() => history.push(`/recipe/${recipe.id}/update_recipe`)}
      >
        Edit
      </button>
      <button
        onClick={() => {
          props.deleteRecipe(params.id);
          history.goBack();
        }}
      >
        Delete
      </button>
      <p onClick={() => history.goBack()}>Back to Recipes</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { deleteRecipe })(Recipe);
