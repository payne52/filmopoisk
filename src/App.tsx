import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { IndexPage } from "components/indexPage/indexPage";
import { ItemSingle } from "components/items/itemSingle/itemSingle";
import { ItemsPage } from "components/items/itemsPage/itemsPage";
import { Layout } from "components/Layout";

import "./fonts/fonts.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="items/:myId" element={<ItemSingle />} />
          <Route path="items" element={<ItemsPage />} />
          <Route path=":genre" element={<ItemsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
