import React from "react";
import { connect } from "react-redux";

const Step = (props) => {
  console.log("props in the Step component: ", props);
  return (
    <div>
      <p>Step #{props.instruction.step}: </p>
      <p>Details: {props.instruction.details}</p>
      <button>Edit</button>
      <button>delete</button>
    </div>
  );
};

export default connect(null, {})(Step);
