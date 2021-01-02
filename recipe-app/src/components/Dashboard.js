import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img_placeholder from "../../src/img_placeholder.png";
import { connect } from "react-redux";
import { getUserRecipes } from "../store/actions";
import Loader from "react-loader-spinner";
import {
  RecipeCard,
  Welcome,
  Button,
  CardTitle,
  RecipesContainer,
  Thumbnail,
  ThumbnailContainer,
  ButtonWrap,
} from "../styles";
import SearchBar from "./SearchBar";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = (props) => {
  console.log("props in the dashboard: ", props);
  const userId = props.userId;

  const [recipesByUser, setRecipesByUser] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/user/${userId}`)
      .then((res) => {
        console.log(res.data);
        setRecipesByUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.userId]);

  return (
    <div>
      {recipesByUser && <Welcome>Welcome {props.username}</Welcome>}
      <SearchBar recipes={recipesByUser.recipes} userId={props.userId} />
      <Link to="/add_recipe" style={{ textDecoration: "none" }}>
        <ButtonWrap>
          <Button>Add New Recipe</Button>
        </ButtonWrap>
      </Link>

      {props.isLoading && (
        <Loader
          type="ThreeDots"
          color="#000"
          height={100}
          width={100}
          timeout={10000}
        />
      )}
      {props.error ? (
        <h2
          style={{ color: "red" }}
          onClick={() => props.getUserRecipes(props.userId)}
        >
          SORRY! An error has occurred. Click here to try again, or log back in.
          🙇
        </h2>
      ) : (
        <RecipesContainer>
          {recipesByUser &&
            recipesByUser.map((rec) => (
              <Link
                to={`/recipe/${rec.id}`}
                key={rec.id}
                style={{
                  textDecoration: "none",
                  display: "flex",
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
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    recipes: state.recipes,
    userId: state.userId,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getUserRecipes })(Dashboard);
