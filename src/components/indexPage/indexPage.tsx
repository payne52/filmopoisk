import { useEffect } from "react";
import { clearCurrentItem } from "redux/reducers/itemsReducer";
import { useAppDispatch } from "redux/store";

import { ItemsRow } from "components/items/itemsRow";

export const IndexPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCurrentItem());
  }, []);

  return (
    <>
      <ItemsRow category="комедия" />
      <ItemsRow category="драма" />
    </>
  );
};
