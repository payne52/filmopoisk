import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCurrentItemInfo } from "redux/reducers/itemsReducer";
import { useAppDispatch, useAppSelector } from "redux/store";
import { Rating } from "utils/rating";

import NoPoster from "../../../img/no-poster.jpg";
import { ChangeItemStatusButton } from "../../common/changeItemStatusButton/changeItemStatusVutton";

import "./itemSingle.css";

export const ItemSingle = () => {
  const { currentItem, loading, error } = useAppSelector(
    (state) => state.itemsState
  );

  const { myId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentItemInfo(Number(myId)));
  }, []);

  console.log(currentItem);

  return (
    <div className="item-single__section section">
      <div className="container">
        <div className="item-single__row row">
          <div className="col col-poster">
            <div className="item-poster">
              {currentItem?.rating.kp ? (
                <Rating value={currentItem?.rating.kp} />
              ) : (
                ""
              )}
              {currentItem?.poster?.url ? (
                <img src={currentItem?.poster?.url} />
              ) : (
                <img src={NoPoster} alt="no-poster" />
              )}
            </div>
          </div>
          <div className="col col-description">
            <h1>
              {currentItem?.name
                ? currentItem?.name
                : currentItem?.alternativeName}
            </h1>
            <p>{currentItem?.alternativeName}</p>
            {currentItem?.id && (
              <ChangeItemStatusButton itemId={currentItem?.id} />
            )}
            <p className="description-text">{currentItem?.description}</p>
            <h2>О {currentItem?.type === "movie" ? "фильме" : "сериале"}</h2>
            <div className="item-info__list">
              <div className="item-info__list-item">
                <div className="item-info__title">Год производства</div>
                <div className="item-info__value">{currentItem?.year}</div>
              </div>
              <div className="item-info__list-item">
                <div className="item-info__title">Страна</div>
                <div className="item-info__value">
                  {currentItem?.countries &&
                    currentItem?.countries.map((elem) => elem.name).join(", ")}
                </div>
              </div>
              <div className="item-info__list-item">
                <div className="item-info__title">Жанр</div>
                <div className="item-info__value">
                  {currentItem?.genres &&
                    currentItem?.genres.map((elem) => elem.name).join(", ")}
                </div>
              </div>
              <div className="item-info__list-item">
                <div className="item-info__title">Режиссер</div>
                <div className="item-info__value">
                  {currentItem?.persons &&
                    currentItem?.persons
                      .filter((elem) => elem.profession === "режиссеры")
                      .map((elem) => (elem.name ? elem.name : elem.enName))
                      .join(", ")}
                </div>
              </div>
              <div className="item-info__list-item">
                <div className="item-info__title">Актеры</div>
                <div className="item-info__value">
                  {currentItem?.persons &&
                    currentItem?.persons
                      .filter((elem) => elem.profession === "актеры")
                      .map((elem) => (elem.name ? elem.name : elem.enName))
                      .join(", ")}
                </div>
              </div>
              {currentItem?.movieLength && (
                <div className="item-info__list-item">
                  <div className="item-info__title">Продолжительность</div>
                  <div className="item-info__value">
                    {currentItem?.movieLength} мин.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
