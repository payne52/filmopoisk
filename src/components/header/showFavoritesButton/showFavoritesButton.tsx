import { ReactComponent as Favorite } from "./favorite.svg";
import { StyledShowFavoritesButton } from "./styledShowFavoritesButton";

export const ShowFavoritesButton = () => {
  return (
    <>
      <StyledShowFavoritesButton>
        <Favorite className="favorite" />
        Favorites
      </StyledShowFavoritesButton>
    </>
  );
};
