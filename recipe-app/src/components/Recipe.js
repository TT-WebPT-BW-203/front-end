import React, { useEffect, useState } from "react";
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
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Recipe = (props) => {
  console.log("props in the Recipe component: ", props);
  const [rehydrate, setRehydrate] = useState([{}]);
  console.log("rehydrate", rehydrate);
  const history = useHistory();
  const params = useParams();

  const recipe = props.recipes.find((rec) => rec.id === Number(params.id));
  console.log("recipe", recipe);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${params.id}`)
      .then((res) => {
        console.log("getrecipesbyID res: ", res.data.ingredients);
        setRehydrate(res.data.ingredients);
      })
      .catch((err) => console.log(err));
  }, []);

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
        {rehydrate.map((ing) => (
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
