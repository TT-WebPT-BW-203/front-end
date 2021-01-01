import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const InstructionsForm = (props) => {
  const { push } = useHistory();
  const [instruction, setInstruction] = useState({
    step: "",
    details: "",
  });
  console.log("InstructionsForm: instruction:", instruction);

  const handleChange = (e) => {
    setInstruction({
      ...instruction,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInstruction({
      step: "",
      details: "",
    });
  };

  return (
    <div>
      this is the instructions component
      <form>
        <input name="step" value={instruction.step} onChange={handleChange} />
        <input
          name="details"
          value={instruction.details}
          onChange={handleChange}
        />
        <button>save Step</button>
        <button>cancel step</button>
      </form>
    </div>
  );
};

export default connect(null, {})(InstructionsForm);
