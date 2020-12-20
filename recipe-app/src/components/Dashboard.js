import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = () => {
  return (
    <div>
      <h3>This is the Dashboard component</h3>

      <Link to="/dashboard/add_recipe">
        <button>Add Recipe</button>
      </Link>
    </div>
  );
};

export default Dashboard;
