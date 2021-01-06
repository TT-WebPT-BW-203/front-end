import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { postIngredients } from "../store/actions";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {
  ItemForm,
  ItemLabel,
  ItemInput,
  ButtonWrap,
  Button,
  DisplayList,
} from "../styles";

const IngredientsForm = (props) => {
  const [ingredient, setIngredient] = useState({
    name: "",
  });

  const [recipeGet, setRecipeGet] = useState([{}]);

  const { id } = useParams();
  const history = useHistory();

  const thisRecipe = props.recipes.find((recipe) => recipe.id === Number(id));
  console.log("thisRecipe", thisRecipe);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        setRecipeGet([...res.data.ingredients]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.ingredients, props.recipe]);

  const recipe = props.recipes.find((recipe) => recipe.id === Number(id));

  const handleChange = (e) => {
    setIngredient({ name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postIngredients(recipe.id, ingredient);
    setIngredient({ name: "" });
  };

  return (
    <div>
      <h3>Ingredients for {thisRecipe.title}</h3>
      <ItemForm>
        <ItemLabel htmlFor="ingredient">Ingredient</ItemLabel>
        <ItemInput
          name="ingredient"
          id="ingredient"
          value={ingredient.name}
          onChange={handleChange}
          style={{ marginBottom: "2rem" }}
        />
        <ButtonWrap>
          <Button onClick={handleSubmit}>Add Ingredient</Button>
        </ButtonWrap>
      </ItemForm>
      <DisplayList>
        {recipeGet.map((ingr) => (
          <p>{ingr.name}</p>
        ))}
      </DisplayList>
      <ButtonWrap>
        <Button onClick={() => history.push(`/recipe/${id}`)}>
          Done adding ingredients
        </Button>
      </ButtonWrap>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
    userId: state.userId,
  };
};
export default connect(mapStateToProps, { postIngredients })(IngredientsForm);
