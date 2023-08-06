import { Link } from "react-router-dom";
import { ItemType } from "types/items";
import { Rating } from "utils/rating";

import "./itemBlock.css";

export const ItemBlock = ({ itemData }: { itemData: ItemType }) => {
  return (
    <div className="itemBlock">
      <Link to={`items/${itemData.id}`}>
        {itemData.rating.kp && <Rating value={itemData.rating.kp} />}
        <img src={itemData.poster.previewUrl} />
      </Link>
      <Link to={`items/${itemData.id}`}>
        <h3>{itemData.name}</h3>
      </Link>
    </div>
  );
};
