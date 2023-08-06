import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemsInfo } from "redux/reducers/itemsReducer";
import { useAppDispatch, useAppSelector } from "redux/store";
import { ItemType } from "types/items";

import { StyledButton } from "components/common/styledButton";

import { ItemBlock } from "../itemBlock/itemBlock";

import "./itemsPage.css";

export const ItemsPage = () => {
  const { itemsInfo, loading, error } = useAppSelector(
    (state) => state.itemsState
  );

  const [visibleItems, setVisibleItems] = useState<Array<ItemType>>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { genre } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchItemsInfo({
        page: currentPage,
        limit: 10,
        genre: genre,
        showAll: true,
      })
    );

    if (itemsInfo?.docs?.length) {
      setVisibleItems([...visibleItems, ...itemsInfo.docs]);
    }
  }, [currentPage]);

  const plus = () => {
    setCurrentPage((prev) => prev + 1);
    console.log(visibleItems, currentPage);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <h2 className="itemsPage__title">
            {genre ? `Жанр: ${genre}` : `Все фильмы и сериалы`}
          </h2>
        </div>
        <div className="row no-flex">
          {visibleItems &&
            visibleItems.map((item) => (
              <ItemBlock key={item.id} itemData={item} />
            ))}
        </div>
        <div className="row">
          <StyledButton onClick={plus}>Показать еще</StyledButton>
        </div>
      </div>
    </div>
  );
};
