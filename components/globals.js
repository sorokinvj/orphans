import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
    @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i|PT+Serif:400,400i,700,700i&subset=cyrillic');
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;