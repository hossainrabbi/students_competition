import React from 'react';
import GlobalStyle, { Container } from '../styles/GlobalStyles';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <Container>{children}</Container>
      <GlobalStyle />
    </main>
  );
}
