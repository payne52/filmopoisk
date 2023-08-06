import styled from "styled-components";
import { Colors } from "themeContext/themes";

interface StyledToggleThemeButtonProps {
  theme: string;
}

export const StyledToggleThemeButton = styled.button<StyledToggleThemeButtonProps>`
  font-size: 0;
  padding: 0;
  line-height: 30px;
  height: 30px;
  width: 30px;
  border: 0;
  position: relative;
  overflow: hidden;
  background: none;

  & svg {
    position: absolute;
    max-height: 24px;
    max-width: 24px;
    padding: 3px !important;
    top: 0;
    left: 0;
    transition: 0.2s;
    fill: ${Colors.LIGHT_GREY};
  }
  & svg.moon {
    max-height: 22px;
    max-width: 22px;
    padding: 5px !important;
  }
  & svg.sun {
    top: ${({ theme }) => (theme === "light" ? "30px" : "0px")};
  }
  & svg.moon {
    top: ${({ theme }) => (theme === "dark" ? "-30px" : "0px")};
  }

  &:hover svg {
    fill: ${Colors.PURE_WHITE};
  }
`;
