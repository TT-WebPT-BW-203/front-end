import React from "react";
import { useHistory, userHistory } from "react-router-dom";

const Ingredients = () => {
  const history = useHistory();
  return (
    <div>
      <form>
        <h3>Enter Ingredients:</h3>
        <input />
        <button onClick={() => history.push("/dashboard/instructions")}>
          Enter Instructions
        </button>
      </form>
    </div>
  );
};

export default Ingredients;
