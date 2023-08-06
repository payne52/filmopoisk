import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchItemsInfo } from "redux/reducers/itemsReducer";
import { useAppDispatch, useAppSelector } from "redux/store";

import { ItemBlock } from "../itemBlock/itemBlock";

export const ItemsPage = () => {
  const { itemsInfo, loading, error } = useAppSelector(
    (state) => state.itemsState
  );

  const { genre } = useParams();

  const dispatch = useAppDispatch();

  const items = itemsInfo?.docs;

  useEffect(() => {
    dispatch(
      fetchItemsInfo({ page: 1, limit: 10, genre: genre, showAll: true })
    );
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row no-flex">
          {items &&
            items.map((item) => <ItemBlock key={item.id} itemData={item} />)}
        </div>
      </div>
    </div>
  );
};
