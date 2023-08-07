import { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <ItemsRow category="приключения" />
      <ItemsRow category="драма" />
      <div className="section">
        <div className="container">
          <div className="row">
            <Link to={`/items`}>
              <h2 className="no-transform">Смотреть все...</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
