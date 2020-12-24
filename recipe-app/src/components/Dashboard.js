import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = (props) => {
  console.log("props in the dashboard: ", props);
  return (
    <div>
      {/* <h3>Welcome {props.username}</h3> */}

      <Link to="/dashboard/add_recipe">
        <button>Add Recipe</button>
      </Link>

      {props.recipes.length > 0 ? (
        props.recipes.map((rec) => (
          <div>
            <p>{rec.title}</p>
            <img src={rec.image} alt="dish" />
            <p>Category: {rec.category}</p>
          </div>
        ))
      ) : (
        <div>
          <p>You have not saved any recipes yet</p>
          <button>Add Recipe Now</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    recipes: state.recipes,
  };
};
export default connect(mapStateToProps, {})(Dashboard);
