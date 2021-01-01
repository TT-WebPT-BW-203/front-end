import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { editIngredient, deleteIngredient } from "../store/actions";

const Ingredient = (props) => {
  console.log("Ingredient: props: ", props);
  const { id } = useParams();
  const ingrId = props.ingredient.id;
  console.log("id:", ingrId);
  const [isEditing, setIsEditing] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
  });
  console.log("newIngredient", newIngredient);
  const handleChange = (e) => {
    setNewIngredient({ name: e.target.value });
  };
  const handleEditButton = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    props.editIngredient(ingrId, newIngredient);
    setNewIngredient({ name: "" });
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    props.deleteIngredient(ingrId);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input value={newIngredient.name} onChange={handleChange} />
          <button onClick={handleSave}>save</button>
          <button onClick={() => setIsEditing(!isEditing)}>cancel</button>
        </div>
      ) : (
        <div>
          <p>
            {props.ingredient.name}
            <button onClick={handleEditButton}>edit</button>
            <button onClick={handleDelete}>delete</button>
          </p>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};
export default connect(mapStateToProps, { editIngredient, deleteIngredient })(
  Ingredient
);
