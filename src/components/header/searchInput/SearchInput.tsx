import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "searchContext";

import { Input } from "./Input";

export const SearchInput = () => {
  const { searchValue, changeSearchValue } = useSearch();
  const [searchInputValue, SetSearchInputValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    changeSearchValue(event.currentTarget.value);
    SetSearchInputValue(event.currentTarget.value);
  };

  useEffect(() => {
    if (location.pathname !== "/search") {
      SetSearchInputValue("");
    }
  }, [location]);

  useEffect(() => {
    if (searchValue) {
      navigate("/search");
    } else {
      navigate("/");
    }
  }, [searchValue]);

  return <Input type="text" onChange={inputHandler} value={searchInputValue} />;
};
