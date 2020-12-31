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
  console.log("props in the Recipe component (from the GLOBAL STATE): ", props);

  const [rehydrate, setRehydrate] = useState([{}]);
  console.log("Recipe: rehydrate: ", rehydrate);
  const [instructionsSideEffects, setInstructionsSideEffects] = useState([{}]);
  console.log(
    "Recipe: instructionsSideEffects: useEffect(): ",
    instructionsSideEffects
  );
  const history = useHistory();
  const params = useParams();

  const recipe = props.recipes.find((rec) => rec.id === Number(params.id));
  console.log(
    "The CURRENT RECIPE we are working on, by id taken from the params obj: ",
    recipe
  );

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${params.id}`)
      .then((res) => {
        console.log("getrecipesbyID res: ", res.data);
        setRehydrate(res.data.ingredients);
        setInstructionsSideEffects(res.data.instructions);
      })
      .catch((err) => console.log(err));
  }, [props.ingredients, props.instructions]);

  return (
    <RecipeContainer>
      <LeftContent>
        <RecipeTitle>Title: {recipe.title}</RecipeTitle>
        <p>Source: {recipe.source}</p>
        <p>Category: {recipe.category}</p>
        <h3>Ingredients: </h3>

        {rehydrate.map((ing) => (
          <div>
            <li>
              {ing.name} <button>edit</button>
              <button>delete</button>
            </li>
          </div>
        ))}
        <Button
          onClick={() => history.push(`/recipe/ingredients/${recipe.id}`)}
        >
          Add Ingredients
        </Button>
        {instructionsSideEffects.map((inst) => (
          <div>
            <p>Step {inst.step}:</p>
            <p>Details {inst.details}</p>
          </div>
        ))}
        <Button
          onClick={() => {
            history.push(`/instructions/${recipe.id}`);
          }}
        >
          Instructions
        </Button>
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
    instructions: state.instructions,
  };
};

export default connect(mapStateToProps, {
  deleteRecipe,
  editIngredient,
  deleteIngredient,
})(Recipe);
