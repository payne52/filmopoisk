import { useAppSelector } from "redux/store";

import { ItemBlock } from "../itemBlock/itemBlock";

export const FavoriteItems = () => {
  const { favoriteItems } = useAppSelector((state) => state.itemsState);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <h2 className="itemsPage__title">Избранное</h2>
        </div>
        <div className="row no-flex">
          {favoriteItems.length ? (
            favoriteItems.map((item) => (
              <ItemBlock key={item.id} itemData={item} favoriteButton={true} />
            ))
          ) : (
            <h3>Здесь ничего нет :(</h3>
          )}
        </div>
      </div>
    </div>
  );
};
