import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchItemsInfo } from "redux/reducers/itemsReducer";
import { useAppDispatch, useAppSelector } from "redux/store";

import { SlickSlider } from "components/slick/slick";

import { ItemCard } from "./itemCard/itemCard";

import "./itemsRow.css";

export const ItemsRow = ({ category }: { category: string }) => {
  const {
    itemsInfoDrama,
    itemsInfoComedy,
    itemsInfoAdventures,
    loading,
    error,
  } = useAppSelector((state) => state.itemsState);

  const selectGenre = (genre: string) => {
    switch (genre) {
      case "драма":
        return itemsInfoDrama;
      case "комедия":
        return itemsInfoComedy;
      case "приключения":
        return itemsInfoAdventures;
    }
  };

  const items = selectGenre(category)?.docs;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!items?.length) {
      dispatch(fetchItemsInfo({ page: 1, limit: 10, genre: category }));
    }
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <Link to={`${category}`}>
            <h2>{category}</h2>
          </Link>
        </div>
        {!!error && <div className="row">{error as React.ReactNode}</div>}
        <div className="items-row no-flex">
          <SlickSlider slideToShow={6} slidesToScroll={2}>
            {items &&
              items.map((item) => <ItemCard key={item.id} itemData={item} />)}
          </SlickSlider>
        </div>
      </div>
    </div>
  );
};
