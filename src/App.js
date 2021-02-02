import React from 'react';
//Components and Pages
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyled';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path={('/game/:id', '/')}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
