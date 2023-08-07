import styled from "styled-components";
import { Colors } from "themeContext/themes";

export const StyledButton = styled.button`
  background: ${Colors.PRIMARY_COLOR};
  color: ${Colors.PURE_WHITE};
  line-height: 40px;
  border: 0;
  border-radius: 20px;
  width: 220px;
  font-family: "Open Sans Bold", sans-serif;
`;
