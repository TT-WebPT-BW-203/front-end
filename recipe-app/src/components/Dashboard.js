import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img_placeholder from "../../src/img_placeholder.png";
import { connect } from "react-redux";
import { getUserRecipes } from "../store/actions";
import Loader from "react-loader-spinner";
import {
  RecipeCard,
  Button,
  CardTitle,
  RecipesContainer,
  Thumbnail,
  ThumbnailContainer,
  ButtonWrap,
} from "../styles";
import SearchBar from "./SearchBar";

const Dashboard = (props) => {
  console.log("props in the dashboard: ", props);

  useEffect(() => {
    props.getUserRecipes(props.userId);
  }, []);

  return (
    <div>
      {props.username && <h2>Welcome {props.username}</h2>}
      <SearchBar />
      <Link to="/add_recipe">
        <ButtonWrap>
          <Button>Add New Recipe</Button>
        </ButtonWrap>
      </Link>

      {props.isLoading === true ? (
        <Loader
          type="ThreeDots"
          color="#000"
          height={100}
          width={100}
          timeout={6000}
        />
      ) : null}
      <RecipesContainer>
        {props.recipes &&
          props.recipes.map((rec) => (
            <Link
              to={`/recipe/${rec.id}`}
              key={rec.id}
              style={{
                textDecoration: "none",
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <RecipeCard>
                <CardTitle>
                  <h4>{rec.title}</h4>
                </CardTitle>
                <ThumbnailContainer>
                  {rec.image === "" ? (
                    <Thumbnail
                      src={img_placeholder}
                      alt="dish image not provided"
                    />
                  ) : (
                    <Thumbnail src={rec.image} alt="Dish" />
                  )}
                </ThumbnailContainer>
                <p>Category: {rec.category}</p>
              </RecipeCard>
            </Link>
          ))}
      </RecipesContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    recipes: state.recipes,
    userId: state.userId,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { getUserRecipes })(Dashboard);
