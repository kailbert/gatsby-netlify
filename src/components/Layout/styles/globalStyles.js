import { createGlobalStyle } from 'styled-components';

import linetoAkkuratBoldEOT from "./fonts/lineto-akkurat-bold.eot"
import linetoAkkuratBoldWOFF from "./fonts/lineto-akkurat-bold.woff"
import linetoAkkuratBoldWOFF2 from "./fonts/lineto-akkurat-bold.woff2"

import linetoAkkuratRegularEOT from "./fonts/lineto-akkurat-regular.eot"
import linetoAkkuratRegularWOFF from "./fonts/lineto-akkurat-regular.woff"
import linetoAkkuratRegularWOFF2 from "./fonts/lineto-akkurat-regular.woff2"


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "AkkuratBold";
    font-style: normal;
    font-weight: normal;
    src: url(${linetoAkkuratBoldEOT}) format("eot"), 
        url(${linetoAkkuratBoldWOFF2}) format("woff2"), 
        url(${linetoAkkuratBoldWOFF}) format("woff");
  }
  @font-face {
    font-family: "AkkuratRegular";
    font-style: normal;
    font-weight: normal;
    src: url(${linetoAkkuratRegularEOT}) format("eot"), 
        url(${linetoAkkuratRegularWOFF2}) format("woff2"), 
        url(${linetoAkkuratRegularWOFF}) format("woff");
  }
  body{
    font-family: "AkkuratRegular", sans-serif;
  }
`
export default GlobalStyle