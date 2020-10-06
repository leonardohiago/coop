import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Ongs from './Pages/Ongs';
import Perfil from './Pages/Perfil';
import Login from './Pages/Login';
import Doacao from './Pages/Doacao';
import DashboardInicio from './Pages/DashboardIncio';
import DashboardItem from './Pages/DashboardItens';
import CadastroOng from './Pages/CadastroOng';
import GlobalStyle from './styles/global';
import DashboardDado from './Pages/DashboardDados';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
          <Switch >
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/ongs" component={Ongs} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/doacao" component={Doacao} />
            <Route path="/dashboard/" component={DashboardInicio} exact />
            <Route path="/dashboard/itens-de-doacoes" component={DashboardItem} exact />
			      <Route path="/cadastrar-ong" component={CadastroOng} exact />     
            <Route path="/dashboard/dados-da-ong" component={DashboardDado} exact/>
     
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
