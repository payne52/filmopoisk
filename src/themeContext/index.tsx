import React, { useContext, useState } from "react";

import { Background } from "components/common/styledBackground";

import { ThemeType } from "./themes";

interface ThemeContextInt {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext({} as ThemeContextInt);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage = JSON.parse(localStorage.getItem("theme") || "{}");

  const [myTheme, setMyTheme] = useState<ThemeType>(themeFromStorage);

  if (!Object.entries(themeFromStorage).length) {
    localStorage.setItem("theme", JSON.stringify("light"));
    setMyTheme("light");
  }

  const toggleMyTheme = () => {
    setMyTheme(myTheme === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme",
      JSON.stringify(myTheme === "light" ? "dark" : "light")
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme: myTheme, toggleTheme: toggleMyTheme }}
    >
      <Background theme={myTheme} className={`wrapper ${myTheme}`}>
        {children}
      </Background>
    </ThemeContext.Provider>
  );
};
