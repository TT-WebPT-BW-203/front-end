import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { postIngredients } from "../store/actions";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const IngredientsForm = (props) => {
  console.log("props in the IngredientsForm: ", props);

  const [rehydrate, setRehydrate] = useState([{}]);
  console.log("rehydrate", rehydrate);
  const [ingredient, setIngredient] = useState({
    name: "",
  });
  const [ingredientList, setIngredientList] = useState([]);
  console.log("ingredientList", ingredientList);
  console.log("ingredient", ingredient);

  const { id } = useParams();
  const history = useHistory();

  const recipe = props.recipes.find((recipe) => recipe.id === Number(id));
  console.log("recipe params: ", recipe);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        console.log("getrecipesbyID res: ", res.data);
        setRehydrate(res.data.ingredients);
      })
      .catch((err) => console.log(err));
  }, [props.ingredients]);

  const rehydrateFn = () => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        console.log("getrecipesbyID res: ", res.data);
        setRehydrate(res.data.ingredients);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setIngredient({ name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postIngredients(recipe.id, ingredient);
    setIngredientList([...ingredientList, ingredient]);
    setIngredient({ name: "" });
  };

  const saveIngredients = (e) => {
    e.preventDefault();
    setIngredientList([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter Ingredients:</h3>
        <input
          name="ingredient"
          value={ingredient.name}
          onChange={handleChange}
        />
        <button>Add Ingredient</button>
      </form>
      <button onClick={saveIngredients}>Save Ingredients</button>
      <div>
        {ingredientList.map((ing) => (
          <p>{ing.name}</p>
        ))}
      </div>
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
