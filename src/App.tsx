import React from 'react';
import ErrorPage from './page/404';
import GlobalStyle from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ErrorPage />
    </>
  )
}

export default App;