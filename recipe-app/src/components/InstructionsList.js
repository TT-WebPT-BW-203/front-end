import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { IngredientDiv } from "../styles";

import Step from "./Step";

const InstructionsList = (props) => {
  const { id } = useParams();

  const [gottenInstructions, setGottenInstructions] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        setGottenInstructions([...res.data.instructions]);
      })
      .catch((err) => console.log(err));
  }, [props.instructions]);

  return (
    <IngredientDiv>
      {gottenInstructions.map((instruction) => (
        <Step instruction={instruction} />
      ))}
    </IngredientDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    instructions: state.instructions,
  };
};
export default connect(mapStateToProps, {})(InstructionsList);
