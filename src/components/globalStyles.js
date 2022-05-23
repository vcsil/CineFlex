import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    }

  button:hover {
        filter: brightness(0.9);
    }

  button {
    background-color: #E8833A;
    border-radius: 3px;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  } 

  body {
    font-family: 'Roboto';
    font-style: normal;
  }
`;

export default GlobalStyle;