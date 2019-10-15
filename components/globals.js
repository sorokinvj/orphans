import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        @media (max-width: 768px) {
            overflow-x: hidden;
        }
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700|PT+Serif&display=swap&subset=cyrillic');
        margin: 0;
        padding: 0;
    }

    .container {
        @media (max-width: 991px) {
            max-width: 90%;
        }

        @media (max-width: 768px) {
            max-width: 720px;
        }
        @media (max-width: 415px) {
            max-width: 390px;
        }
        @media (max-width: 320px) {
            max-width: 290px;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`;

export default GlobalStyle;
