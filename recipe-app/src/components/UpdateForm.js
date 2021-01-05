import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { updateRecipe } from "../store/actions";
import { Button, ButtonWrap, CenteredForm, StyledLabel } from "../styles";

const UpdateForm = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const recipeToEdit = props.recipes.find((rec) => rec.id === Number(id));

  const [initialRecipe, setInitialRecipe] = useState(recipeToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateRecipe(id, initialRecipe);
    history.goBack();
  };

  const handleChange = (e) => {
    setInitialRecipe({
      ...initialRecipe,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <CenteredForm>
      <h3>UpdateForm</h3>
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">Update recipe title:</StyledLabel>
        <input
          id="title"
          name="title"
          value={initialRecipe.title}
          onChange={handleChange}
        />
        <br />
        <StyledLabel htmlFor="source">Update Source: </StyledLabel>
        <input
          id="source"
          name="source"
          value={initialRecipe.source}
          onChange={handleChange}
        />
        <br />
        <StyledLabel htmlFor="category">Update Category: </StyledLabel>
        <input
          id="category"
          name="category"
          value={initialRecipe.category}
          onChange={handleChange}
        />
        <br />
        <StyledLabel htmlFor="image">Update Image URL</StyledLabel>
        <input
          id="image"
          name="image"
          placeholder="Enter image URL"
          value={initialRecipe.image}
          onChange={handleChange}
        />
        <br />
        <ButtonWrap>
          <Button>Update</Button>
        </ButtonWrap>
      </form>
      <ButtonWrap>
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          Cancel
        </Button>
      </ButtonWrap>
    </CenteredForm>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
  };
};
export default connect(mapStateToProps, { updateRecipe })(UpdateForm);
