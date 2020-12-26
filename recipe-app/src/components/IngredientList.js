import React from "react";

const IngredientList = (props) => {
  console.log("props in the IngredeientsList component: ", props);
  return (
    <div>
      This is the Ingredient List
      {props.ingredientList.map((ing) => (
        <li>{ing}</li>
      ))}
    </div>
  );
};

export default IngredientList;
