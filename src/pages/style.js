import { createGlobalStyle } from "styled-components";
import Soleto from "../fonts/Soleto-Regular/Soleto-Regular.ttf"
import Paralucent from "../fonts/Paralucent/Paralucent.ttf"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Soleto";
    src: url(${Soleto});
  }
@font-face {
    font-family: "Paralucent";
    src: url(${Paralucent});
}
body{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: #25294C;
    cursor: default;
}
&::-webkit-scrollbar {
    width: 8px;
}
&::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
&::-webkit-scrollbar-thumb {
    background: rgb(187, 184, 184); 
}
`