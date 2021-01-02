import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { postIngredients } from "../store/actions";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { ItemForm, ItemLabel, ItemInput, ButtonWrap, Button } from "../styles";

const IngredientsForm = (props) => {
  console.log("props in the IngredientsForm: ", props);

  const [ingredient, setIngredient] = useState({
    name: "",
  });
  console.log("ingredient", ingredient);

  const [recipeGet, setRecipeGet] = useState([{}]);
  console.log("recipeGet: ", recipeGet);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        console.log(
          "IngredientsForm: useEffect(): res: ",
          res.data.ingredients
        );
        setRecipeGet([...res.data.ingredients]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.ingredients, props.recipe]);

  const recipe = props.recipes.find((recipe) => recipe.id === Number(id));
  console.log("recipe params: ", recipe);

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
      <ItemForm onSubmit={handleSubmit}>
        <h3>Enter Ingredients:</h3>
        <ItemLabel htmlFor="ingredient">Ingredient</ItemLabel>
        <ItemInput
          name="ingredient"
          id="ingredient"
          value={ingredient.name}
          onChange={handleChange}
        />
        <ButtonWrap style={{ marginTop: "2rem" }}>
          <Button>Add Ingredient</Button>
        </ButtonWrap>
      </ItemForm>
      <div>
        {recipeGet.map((ingr) => (
          <p>{ingr.name}</p>
        ))}
      </div>
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
