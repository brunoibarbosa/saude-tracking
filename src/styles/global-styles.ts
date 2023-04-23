import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  a {
    text-decoration: none;
  }

  body {
    background: ${({ theme }) => theme.colors.white};
    font-family: 'Montserrat';
  }
`
