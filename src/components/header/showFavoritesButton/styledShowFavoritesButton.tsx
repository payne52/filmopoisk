import styled from "styled-components";
import { Colors } from "themeContext/themes";

export const StyledShowFavoritesButton = styled.button`
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
    max-height: 23px;
    max-width: 23px;
    padding: 4px !important;
    top: 0;
    left: 0;
    transition: 0.2s;
    fill: ${Colors.LIGHT_GREY};
  }

  &:hover svg {
    fill: ${Colors.PURE_WHITE};
  }
`;
