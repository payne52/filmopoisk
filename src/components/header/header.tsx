import { Link } from "react-router-dom";

import { Input } from "components/header/searchInput/Input";

import { ReactComponent as Logo } from "./img/logo.svg";
import { ShowFavoritesButton } from "./showFavoritesButton/showFavoritesButton";
import { ToggleThemeButton } from "./toggleThemeButton/toggleThemeButton";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__row row">
          <div className="col">
            <Link to={"/"} className="logo-link">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="header__col_search col">
            <Input type="text" />
          </div>
          <div className="col">
            <ToggleThemeButton />
          </div>
          <div className="col">
            <ShowFavoritesButton />
          </div>
        </div>
      </div>
    </div>
  );
};
