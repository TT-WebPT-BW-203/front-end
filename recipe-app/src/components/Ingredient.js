import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editIngredient } from "../store/actions";

const Ingredient = (props) => {
  console.log("props in the Ingredient component: ", props);

  const [newIngredient, setNewIngredient] = useState({
    name: "",
  });

  const { id } = props.ingredient;
  console.log("id", id);

  const handleEdit = (e) => {
    props.editIngredient(id, newIngredient);
  };
  return (
    <li>
      {props.ingredient.name}
      <button onClick={handleEdit}>edit</button>
      <button>delete</button>
    </li>
  );
};

export default connect(null, { editIngredient })(Ingredient);
