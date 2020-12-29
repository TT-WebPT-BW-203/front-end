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
  return (
    <RecipeContainer>
      <LeftContent>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <p>Source: {recipe.source}</p>
        <Button onClick={() => history.push(`${recipe.id}/ingredients`)}>
          Add Ingredients
        </Button>
        {/* map list of Ingredients */}
        <Button>Instructions</Button>
      </LeftContent>
      <RightContent>
        {recipe.image === "" ? (
          <Image src={img_placeholder} alt="Missing dish image" />
        ) : (
          <Image src={recipe.image} alt="Dish" />
        )}

        <Button
          onClick={() => history.push(`/recipe/${recipe.id}/update_recipe`)}
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
        <Link style={{ marginTop: ".5rem" }} onClick={() => history.goBack()}>
          Back to Recipes
        </Link>
      </RightContent>
    </RecipeContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { deleteRecipe })(Recipe);
