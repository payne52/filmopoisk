import styled from "styled-components";
import { Colors } from "themeContext/themes";

interface SectionProps {
  theme: string;
}

export const Background = styled.div<SectionProps>`
  background: ${({ theme }) =>
    theme === "light" ? Colors.PURE_WHITE : Colors.DARK};
  color: ${({ theme }) => (theme === "light" ? Colors.DARK : Colors.LIGHT)};
  transition: 0.2s;

  & a {
    color: ${({ theme }) => (theme === "light" ? Colors.DARK : Colors.LIGHT)};
  }
`;
