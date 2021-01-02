import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { putInstructions } from "../store/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Step = (props) => {
  console.log("props in the Step component: ", props);
  const id = props.instruction.id;
  console.log("id in step.js", id);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/instructions/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.step, props.details]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <p>
          editing <button onClick={handleEdit}>done editing</button>
        </p>
      ) : (
        <div>
          <p>Step #{props.instruction.step}: </p>
          <p>Details: {props.instruction.details}</p>
          <button onClick={handleEdit}>Edit</button>
          <button>delete</button>
        </div>
      )}
    </div>
  );
};

export default connect(null, { putInstructions })(Step);
