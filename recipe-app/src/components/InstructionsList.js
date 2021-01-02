import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Step from "./Step";

const InstructionsList = (props) => {
  console.log("InstructionsList: props: ", props);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        console.log("InstructionsList: useEffect: res: ", res.data);
      })
      .catch((err) => console.log(err));
  }, [props.instructions]);

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>This is the instructions list</p>
      {props.instructions.map((instruction) => (
        <>
          <Step instruction={instruction} />
          <p style={{ fontWeight: "bold" }}>Step #{instruction.step}:</p>
          <p>Details: {instruction.details}</p>
        </>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    instructions: state.instructions,
  };
};
export default connect(mapStateToProps, {})(InstructionsList);
