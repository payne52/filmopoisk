import { Link } from "react-router-dom";
import { BASE_URL } from "App";
import { ItemType } from "types/items";
import { Rating } from "utils/rating";

import { ChangeItemStatusButton } from "../../common/changeItemStatusButton/changeItemStatusVutton";

import "./itemBlock.css";

export const ItemBlock = ({
  itemData,
  favoriteButton,
}: {
  itemData: ItemType;
  favoriteButton?: boolean;
}) => {
  return (
    <div className="itemBlock">
      <Link
        to={`${BASE_URL}/items/${itemData.id}`}
        className="itemBlock__poster"
      >
        {itemData.rating.kp && <Rating value={itemData.rating.kp} />}
        <img src={itemData.poster.previewUrl} />
      </Link>
      <div className="itemBlock__description">
        <Link to={`${BASE_URL}/items/${itemData.id}`}>
          <h3 className="itemBlock__title">{itemData.name}</h3>
        </Link>
        {itemData.alternativeName && <p>{itemData.alternativeName}</p>}
        <p>{itemData.year}</p>
        <p>{itemData.countries.map((elem) => elem.name).join(", ")}</p>
        <p>({itemData.genres.map((elem) => elem.name).join(", ")})</p>
        {favoriteButton && <ChangeItemStatusButton itemId={itemData.id} />}
      </div>
    </div>
  );
};
