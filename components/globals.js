import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        @media (max-width: 768px) {
            overflow-x: hidden;
        }
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i|PT+Serif:400,400i,500,500i&subset=cyrillic');
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`;

export default GlobalStyle;
