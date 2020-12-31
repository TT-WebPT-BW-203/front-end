import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editIngredient, deleteIngredient } from "../store/actions";
import { Button, ButtonWrap, ListItems, StyledInput } from "../styles";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Ingredient = (props) => {
  const [getIngredients, setGetIngredients] = useState([]);
  console.log("getIngredients:", getIngredients);
  const [edit, setEdit] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
  });

  const { id } = props.ingredient;
  const params = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${params.id}`)
      .then((res) => {
        console.log("Ingredient: useEffect: res:", res.data.ingredients);
        setGetIngredients([...res.data.ingredients]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.ingredients]);

  const handleChange = (e) => {
    setNewIngredient({ name: e.target.value });
  };

  const handleEdit = (e) => {
    setEdit(!edit);
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
          <StyledInput value={newIngredient.name} onChange={handleChange} />{" "}
          <Button onClick={handleSave}>save</Button>
          <Button onClick={() => setEdit(!edit)}>cancel edit</Button>
        </div>
      ) : (
        <ListItems>
          {getIngredients.name}
          <ButtonWrap style={{ justifyContent: "flex-end" }}>
            <Button onClick={handleEdit}>edit</Button>
            <Button onClick={() => props.deleteIngredient(id)}>delete</Button>
          </ButtonWrap>
        </ListItems>
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
