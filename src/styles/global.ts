import { createGlobalStyle } from "styled-components";
import FashionFetishBold from "../fonts/fashion-fetish-bold.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: FashionFetishBold;
    src: url(${FashionFetishBold});
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
