import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

   
   html, body {
      height: 100%;
      background-color: #1a1a1a;
      color: white;
   }
   *{  
      box-sizing: border-box;
      margin: 0;
   }
   button {
      border: none;
   }
   a {
      text-decoration: none;
   }
   strong{
      font-weight: bold;
   }
   em {
      font-style: italic;
   }
   p{
      line-height: 1.5;
   }
   h1{
      font-size: 2.5rem;
   }
   h2{
      font-size: 2rem;
   }
   h3{
      font-size: 2rem;
   }
   h4{
      font-size:1.125rem
   }
  
`;

export default GlobalStyles;
