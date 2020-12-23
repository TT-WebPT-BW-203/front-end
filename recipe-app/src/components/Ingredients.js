import React from "react";
import { useHistory, Link } from "react-router-dom";

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
      <Link to="/dashboard/add_recipe">
        <p>Back</p>
      </Link>
    </div>
  );
};

export default Ingredients;
