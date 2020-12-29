import React from "react";
import img_placeholder from "../../src/img_placeholder.png";
import { useParams, useHistory, Link } from "react-router-dom";
import { deleteRecipe } from "../store/actions";
import { connect } from "react-redux";
import {
  RecipeContainer,
  RecipeTitle,
  Button,
  RightContent,
  LeftContent,
  Image,
} from "../styles";

const Recipe = (props) => {
  console.log("props in the Recipe component: ", props);
  const history = useHistory();
  const params = useParams();

  const recipe = props.recipes.find((rec) => rec.id === Number(params.id));
  console.log("recipe", recipe);
  return (
    <RecipeContainer>
      <LeftContent>
        <RecipeTitle>Title: {recipe.title}</RecipeTitle>
        <p>Source: {recipe.source}</p>
        <p>Category: {recipe.category}</p>
        <Button
          onClick={() => history.push(`/recipe/${recipe.id}/ingredients`)}
        >
          Add Ingredients
        </Button>
        <p>List: </p>
        {props.ingredients.map((ing) => (
          <li>{ing.name}</li>
        ))}

        <Button>Instructions</Button>
      </LeftContent>
      <RightContent>
        {recipe.image === "" ? (
          <Image src={img_placeholder} alt="Missing dish image" />
        ) : (
          <Image src={recipe.image} alt="Dish" />
        )}

        <Button
          onClick={() => {
            history.push(`/recipe/${recipe.id}/update_recipe`);
          }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            props.deleteRecipe(params.id);
            history.goBack();
          }}
        >
          Delete
        </Button>
        <Link
          style={{ marginTop: ".5rem" }}
          onClick={() => history.push("/dashboard")}
        >
          Back to Recipes
        </Link>
      </RightContent>
    </RecipeContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps, { deleteRecipe })(Recipe);
