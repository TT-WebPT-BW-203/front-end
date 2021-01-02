import React, { useEffect, useState } from "react";
import img_placeholder from "../../src/img_placeholder.png";
import { useParams, useHistory, Link } from "react-router-dom";
import {
  deleteRecipe,
  editIngredient,
  deleteIngredient,
} from "../store/actions";
import { connect } from "react-redux";
import {
  RecipeContainer,
  RecipeTitle,
  Button,
  RightContent,
  LeftContent,
  Image,
} from "../styles";
import IngredientList from "./IngredientList";
import InstructionsForm from "./InstructionsForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import InstructionsList from "./InstructionsList";

const Recipe = (props) => {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const [recipes, setRecipes] = useState([]);

  const recipe = props.recipes.find((rec) => rec.id === Number(id));
  console.log(
    "The CURRENT RECIPE we are working on, by id taken from the params obj: ",
    recipe
  );

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/user/${props.userId}`)
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.userId, props.recipe]);

  const handleDelete = () => {
    props.deleteRecipe(id);
    history.push("/dashboard");
  };

  return (
    <RecipeContainer>
      <LeftContent>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <p>Source will go here: {recipe.source}</p>
        <div>
          <h3>Ingredients: </h3>
          <IngredientList />
          <button
            onClick={() => history.push(`/recipe/${id}/ingredients_form`)}
          >
            Add Ingredients
          </button>
        </div>
        <div>
          <h3>Instructions: </h3>
          <InstructionsList />
          <button
            onClick={() => history.push(`/recipe/${id}/instructions_form`)}
          >
            Add Instructions
          </button>
        </div>
      </LeftContent>
      <RightContent>
        <div>
          {recipe.image === "" ? (
            <Image src={img_placeholder} alt="user image missing" />
          ) : (
            <div>
              <img src={recipe.image} alt="the image will go here" />
            </div>
          )}
        </div>

        <div>
          <Button
            onClick={() => {
              history.push(`/recipe/${id}/update_recipe`);
            }}
          >
            edit recipe
          </Button>
          <Button onClick={handleDelete}>delete recipe</Button>
        </div>
        <Link to={"/dashboard"}>Back to your recipes</Link>
      </RightContent>
    </RecipeContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
    instructions: state.instructions,
    userId: state.userId,
  };
};

export default connect(mapStateToProps, {
  deleteRecipe,
  editIngredient,
  deleteIngredient,
})(Recipe);
