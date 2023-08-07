import { Link } from "react-router-dom";
import { BASE_URL } from "App";
import { ItemType } from "types/items";
import { Rating } from "utils/rating";

import "./itemCard.css";

export const ItemCard = ({ itemData }: { itemData: ItemType }) => {
  return (
    <div className="itemCard">
      <Link to={`${BASE_URL}/items/${itemData.id}`}>
        {itemData.rating.kp && <Rating value={itemData.rating.kp} />}
        <img src={itemData.poster.previewUrl} />
      </Link>
    </div>
  );
};
