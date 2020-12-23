import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = (props) => {
  return (
    <div>
      <h3>Welcome</h3>

      <Link to="/dashboard/add_recipe_1">
        <button>Add Recipe</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Dashboard);
