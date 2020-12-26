import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
  console.log("props in the IngredientsList component: ", props);
  return (
    <div>
      Your Ingredients:
      {props.ingredientList.map((ing) => (
        <Ingredient ingredient={ing} />
      ))}
    </div>
  );
};

export default IngredientList;
