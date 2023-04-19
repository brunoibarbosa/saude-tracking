import { createGlobalStyle } from "styled-components";

export interface DefaultTheme {
  colors: {
    primary: string;
    secondary: string
  };
}

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme }) => theme.colors.primary};
  }
`
