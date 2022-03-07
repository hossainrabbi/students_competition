import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;1,700&display=swap');

    * {
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }

    body {
        font-family: 'PT Sans', sans-serif;
    }

    ul {
        list-style-type: none;
        margin: 0;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
`;

export const Container = styled.div`
  max-width: 1170px;
  width: 90vw;
  margin: 0 auto;
`;

export const Button = styled.button`
  margin: 0 auto;
  padding: 2px 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff8e00;
  color: #fff;
  border-color: transparent;
  margin-top: ${({ marginTop }) => marginTop}px;

  svg {
    margin-right: 10px;
  }
`;

export default GlobalStyle;
