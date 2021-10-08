import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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