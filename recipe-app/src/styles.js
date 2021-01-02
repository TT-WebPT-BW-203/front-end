import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  margin-left: 1rem;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NavBarLinks = styled.p`
  padding: 0.75rem;
`;

export const A = styled.link`
  text-decoration: none;
`;

export const RecipesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const Welcome = styled.h2`
  margin-left: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  text-transform: uppercase;
  background-color: dimgrey;
  color: #fff;
  border: none;
  border-radius: 3px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RecipeCard = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  margin: 1rem;
  box-shadow: 3px 3px 5px lightgray;
`;
export const ThumbnailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
`;
export const Thumbnail = styled.img`
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
`;

export const CardTitle = styled.div`
  text-transform: capitalize;
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
`;

export const RecipeContainer = styled.div`
  display: flex;
  width: 75%;
  margin: 3rem auto;
`;
export const RecipeTitle = styled.h3`
  text-transform: capitalize;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 1rem;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 1rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 2rem;
`;

export const SearchCentered = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

export const CenteredForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  text-align: right;
  padding: 2rem;
`;

export const StyledInput = styled.input`
  height: 1.5rem;
  border-radius: 3px;
  width: 55%;
`;

export const ListItems = styled.li`
  display: flex;
  list-style: none;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  font-size: larger;
  padding-bottom: 0.5rem;
  border: lightgray solid 1px;
`;

export const IngredientDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IngredientText = styled.div`
  display: flex;
  margin-top: -0.5rem;
  padding: 0;
  text-transform: capitalize;
`;
export const TextP = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const ActionButtons = styled.button`
  text-transform: capitalize;
  border-radius: 8px;
  margin-left: 0.5rem;
  border: #a4c639 solid 0.5px;
  background-color: #a4c639;
`;
export const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 0 auto;
`;

export const ItemLabel = styled.label`
  padding-left: 3rem;
`;

export const ItemInput = styled.input`
  font-size: large;
  width: 60%;
  margin: 0 auto;
`;
