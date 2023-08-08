import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getBaseUrl } from "utils/getBaseUrl";

import { IndexPage } from "components/indexPage/indexPage";
import { FavoriteItems } from "components/items/favoritesPage/favoritesPage";
import { ItemSingle } from "components/items/itemSingle/itemSingle";
import { ItemsPage } from "components/items/itemsPage/itemsPage";
import { SearchPage } from "components/items/searchPage/searchPage";
import { Layout } from "components/Layout";

import "./fonts/fonts.css";
import "./App.css";

export const BASE_URL = getBaseUrl();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="items/:myId" element={<ItemSingle />} />
          <Route path="items" element={<ItemsPage />} />
          <Route path=":genre" element={<ItemsPage />} />
          <Route path="favorite" element={<FavoriteItems />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
