import { useEffect, useState } from "react";
import {
  clearSearchResult,
  fetchItemsInfoFromSearchResult,
} from "redux/reducers/itemsReducer";
import { useAppDispatch, useAppSelector } from "redux/store";
import { useSearch } from "searchContext";
import { SearchItemType } from "types/items";

import { StyledButton } from "components/common/styledButton";

import { ItemBlockForSearchResult } from "../itemBlockForSearchResult/itemBlockForSearchResult";

export const SearchPage = () => {
  const { searchResult, loading, error } = useAppSelector(
    (state) => state.itemsState
  );

  const { searchValue } = useSearch();

  const [visibleItems, setVisibleItems] = useState<Array<SearchItemType>>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchItemsInfoFromSearchResult({
        page: currentPage,
        limit: 10,
        searchText: searchValue,
      })
    );
  }, [currentPage, searchValue]);

  useEffect(() => {
    if (searchResult?.docs?.length) {
      setVisibleItems([...visibleItems, ...searchResult.docs]);
    }
  }, [searchResult]);

  useEffect(() => {
    dispatch(clearSearchResult);
    setVisibleItems([]);
  }, [searchValue]);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <h2 className="itemsPage__title">Результаты поиска:</h2>
        </div>
        <div className="row no-flex">
          {visibleItems.length ? (
            visibleItems.map((item) => (
              <ItemBlockForSearchResult key={item.id} itemData={item} />
            ))
          ) : (
            <h3>По Вашему запросу ничего не найдено :(</h3>
          )}
        </div>
        <div className="row align-center">
          <StyledButton onClick={nextPage}>Показать еще</StyledButton>
        </div>
      </div>
    </div>
  );
};
