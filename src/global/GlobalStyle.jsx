import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap');

    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Figtree', sans-serif;
    }


    ul {
    list-style: none;
    }


    a {
    text-decoration: none;
    }

    body {
            background-color: #ccc; 
    }


    .danger {
        color: red;
        background-color: #ff000024;
        padding:0.3rem;
        font-size: 14px;
        border-radius:4px;
    }



`;

export default GlobalStyle;
