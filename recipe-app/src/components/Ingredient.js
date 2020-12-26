import React from "react";

const Ingredient = (props) => {
  console.log("props in the Ingredient component: ", props);
  return (
    <li>
      {props.ingredient}
      <button>edit</button>
      <button>delete</button>
    </li>
  );
};

export default Ingredient;
