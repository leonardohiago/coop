import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Ongs from './Pages/Ongs';
import Login from './Pages/Login';
import Doacao from './Pages/Doacao';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
          <Switch >
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/ongs" component={Ongs} />
            <Route path="/doacao" component={Doacao} exact />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
