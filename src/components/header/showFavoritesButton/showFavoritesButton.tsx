import { useNavigate } from "react-router-dom";

import { ReactComponent as Favorite } from "./favorite.svg";
import { StyledShowFavoritesButton } from "./styledShowFavoritesButton";

export const ShowFavoritesButton = () => {
  const navigate = useNavigate();
  const navigateToFavorite = () => {
    navigate("/favorite");
  };

  return (
    <>
      <StyledShowFavoritesButton onClick={navigateToFavorite}>
        <Favorite className="favorite" />
        Favorites
      </StyledShowFavoritesButton>
    </>
  );
};
