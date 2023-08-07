import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "themeContext";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
