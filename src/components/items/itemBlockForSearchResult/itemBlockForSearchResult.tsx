import { Link } from "react-router-dom";
import { BASE_URL } from "App";
import { SearchItemType } from "types/items";
import { Rating } from "utils/rating";

import NoPoster from "../../../img/no-poster.jpg";

import "../itemBlock/itemBlock.css";

export const ItemBlockForSearchResult = ({
  itemData,
}: {
  itemData: SearchItemType;
}) => {
  return (
    <div className="itemBlock">
      <Link
        to={`${BASE_URL}/items/${itemData.id}`}
        className="itemBlock__poster"
      >
        {itemData.rating ? <Rating value={itemData.rating} /> : ""}
        {itemData.poster ? (
          <img src={itemData.poster} />
        ) : (
          <img src={NoPoster} />
        )}
      </Link>
      <div className="itemBlock__description">
        <Link to={`${BASE_URL}/items/${itemData.id}`}>
          <h3 className="itemBlock__title">
            {itemData.name
              ? itemData.name
              : itemData.alternativeName
              ? itemData.alternativeName
              : ""}
          </h3>
        </Link>
        {itemData.alternativeName && <p>{itemData.alternativeName}</p>}
        <p>{itemData.year}</p>
        <p>{itemData.countries.map((elem) => elem).join(", ")}</p>
        <p>({itemData.genres.map((elem) => elem).join(", ")})</p>
      </div>
    </div>
  );
};
