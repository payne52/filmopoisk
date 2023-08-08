import styled from "styled-components";
import { Colors } from "themeContext/themes";

export const StyledInput = styled.input`
  line-height: 30px;
  padding: 0 15px;
  border-radius: 5px;
  outline: none;
  border: 0;
  width: calc(100% - 30px);
  background-color: #444;
  transition: 0.2s;
  color: ${Colors.PURE_WHITE};

  &:focus {
    background-color: ${Colors.PURE_WHITE};
    color: ${Colors.DARK};
  }
`;
