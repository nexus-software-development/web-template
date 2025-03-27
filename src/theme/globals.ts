import * as dateFns from "date-fns";
import { ptBR } from "date-fns/locale";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #fff;
  }
`;

dateFns.setDefaultOptions({ locale: ptBR });

export default GlobalStyle;
