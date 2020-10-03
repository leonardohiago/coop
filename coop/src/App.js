import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CadastroOng from './Pages/CadastroOng';

import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
          <Switch >
            <Route path="/" component={Home} exact />
            <Route path="/cadastrar-ong" component={CadastroOng} exact />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
