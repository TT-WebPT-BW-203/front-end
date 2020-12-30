import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editIngredient } from "../store/actions";

const Ingredient = (props) => {
  console.log("props in the Ingredient component: ", props);

  const [edit, setEdit] = useState(false);
  console.log("is editing? ", edit);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
  });

  const { id } = props.ingredient;
  console.log("id", id);

  const handleChange = (e) => {
    setNewIngredient({ name: e.target.value });
  };

  const handleEdit = (e) => {
    setEdit(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    props.editIngredient(id, newIngredient);
    setNewIngredient({
      name: "",
    });
    setEdit(!edit);
  };

  return (
    <div>
      {edit ? (
        <div>
          <input value={newIngredient.name} onChange={handleChange} />{" "}
          <button onClick={handleSave}>save</button>
          <button onClick={() => setEdit(!edit)}>cancel edit</button>
        </div>
      ) : (
        <li>
          {props.ingredient.name}
          <button onClick={handleEdit}>edit</button>
          <button>delete</button>
        </li>
      )}
    </div>
  );
};

export default connect(null, { editIngredient })(Ingredient);
