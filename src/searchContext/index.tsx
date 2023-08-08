import React, { useContext, useState } from "react";

interface SearchContextInt {
  searchValue: string;
  changeSearchValue: (value: string) => void;
}

const SearchContext = React.createContext({} as SearchContextInt);

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState<string>("");

  const ChangeSearchText = (value: string) => {
    setSearchText(value);
  };

  return (
    <SearchContext.Provider
      value={{ searchValue: searchText, changeSearchValue: ChangeSearchText }}
    >
      {children}
    </SearchContext.Provider>
  );
};
