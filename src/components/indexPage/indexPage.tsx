import { useEffect } from "react";
import {
  clearCurrentItem,
  clearCurrentItems,
} from "redux/reducers/itemsReducer";
import { useAppDispatch } from "redux/store";

import { ItemsRow } from "components/items/itemsRow";

export const IndexPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCurrentItem());
    dispatch(clearCurrentItems());
  }, []);

  return (
    <>
      <ItemsRow category="комедия" />
      <ItemsRow category="драма" />
    </>
  );
};
