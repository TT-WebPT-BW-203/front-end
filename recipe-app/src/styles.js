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
  color: white;
  background: black;
  padding: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
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
  width: 40%;
  margin: 3rem auto;
`;
export const RecipeTitle = styled.h3`
  text-transform: capitalize;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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
