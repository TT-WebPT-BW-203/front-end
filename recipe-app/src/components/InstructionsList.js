import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { IngredientDiv } from "../styles";

import Step from "./Step";

const InstructionsList = (props) => {
  console.log("InstructionsList: props: ", props);
  const { id } = useParams();
  console.log(id);

  const [gottenInstructions, setGottenInstructions] = useState([]);
  console.log("gottenInstructions", gottenInstructions);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        console.log(
          "InstructionsList: useEffect: res: ",
          res.data.instructions
        );
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
