import { useTheme } from "themeContext";

import { ReactComponent as Moon } from "./icons/moon.svg";
import { ReactComponent as Sun } from "./icons/sun.svg";
import { StyledToggleThemeButton } from "./styledToggleThemeButton";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <StyledToggleThemeButton onClick={toggleTheme} theme={theme}>
        <Moon className="moon" />
        <Sun className="sun" />
        Switch theme
      </StyledToggleThemeButton>
    </>
  );
};
