import { useEffect, useState } from "react";
import { addToFavorite, deleteFromFavorite } from "redux/reducers/itemsReducer";
import { useAppDispatch, useAppSelector } from "redux/store";

import { StyledButton } from "../styledButton";

export const ChangeItemStatusButton = ({ itemId }: { itemId: number }) => {
  const [buttonText, setButtonText] = useState("Добавить в избранное");
  const { favoriteItems } = useAppSelector((state) => state.itemsState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (favoriteItems.find((item) => item.id === itemId)) {
      setButtonText("Удалить из избранного");
    }
  }, []);

  const ChangeItemStatus = () => {
    if (!favoriteItems.find((item) => item.id === itemId)) {
      dispatch(addToFavorite());
      setButtonText("Удалить из избранного");
    } else {
      dispatch(deleteFromFavorite({ deleteId: itemId }));
      setButtonText("Добавить в избранное");
    }
  };

  return <StyledButton onClick={ChangeItemStatus}>{buttonText}</StyledButton>;
};
