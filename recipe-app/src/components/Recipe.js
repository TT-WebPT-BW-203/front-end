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
  ButtonWrap,
  RightContent,
  LeftContent,
  Image,
} from "../styles";
import IngredientList from "./IngredientList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import InstructionsList from "./InstructionsList";

const Recipe = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);

  const recipe = props.recipes.find((rec) => rec.id === Number(id));

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/user/${props.userId}`)
      .then((res) => {
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
          <ButtonWrap>
            <Button
              onClick={() => history.push(`/recipe/${id}/ingredients_form`)}
            >
              {" "}
              Add Ingredients
            </Button>
          </ButtonWrap>
        </div>
        <div>
          <h3>Instructions: </h3>
          <InstructionsList />
          <ButtonWrap>
            <Button
              onClick={() => history.push(`/recipe/${id}/instructions_form`)}
            >
              Add Instructions
            </Button>
          </ButtonWrap>
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
          <ButtonWrap>
            <Button
              style={{
                marginRight: "1rem",
                padding: ".5rem",
              }}
              onClick={() => {
                history.push(`/recipe/${id}/update_recipe`);
              }}
            >
              edit recipe
            </Button>
            <Button onClick={handleDelete}>delete recipe</Button>
          </ButtonWrap>
        </div>
        <ButtonWrap>
          <Link to={"/dashboard"} style={{ marginTop: ".5rem" }}>
            Back to your recipes
          </Link>
        </ButtonWrap>
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
