import React from 'react';
//Components and Pages
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyled';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={('/game/:id', '/')}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
