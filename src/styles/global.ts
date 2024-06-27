import { createGlobalStyle } from "styled-components";
import FashionFetishBoldWoff from "../fonts/fashion-fetish-bold.woff";
import FashionFetishBoldWoff2 from "../fonts/fashion-fetish-bold.woff2";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Fashion Fetish';
    font-display: swap;
    font-weight: bold;
    src: local('Fashion Fetish'), 
        url(${FashionFetishBoldWoff2}) format('woff2'), 
        url(${FashionFetishBoldWoff}) format('woff');
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,html {
    background-color: ${(props) => props.theme.colors.background};
    height: 100%;
}

`;
