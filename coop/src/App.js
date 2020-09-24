import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';

import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
          <Switch >
            <Route path="/" component={Home} exact />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
