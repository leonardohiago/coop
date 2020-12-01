import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../Pages/Home';
import Ongs from '../Pages/Ongs';
import Perfil from '../Pages/Perfil';
import Login from '../Pages/Login';
import Doacao from '../Pages/Doacao';
import DashboardInicio from '../Pages/DashboardInicio';
import DashboardItem from '../Pages/DashboardItens';
import CadastroOng from '../Pages/CadastroOng';
import DashboardDados from '../Pages/DashboardDados';
import DashboardPublicacoes from '../Pages/DashboardPublicacoes';
import DashboardAlterarSenha from '../Pages/DashboardAlterarSenha';
import DashboardFotos from '../Pages/DashboardFotos';


const Routes = () => (
  <Switch>
    {/* Rotas públicas */}
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
    <Route path="/ongs" component={Ongs} />
    <Route path="/perfil/:id" component={Perfil} />
    <Route path="/doacao/:id" component={Doacao} />
    <Route path="/cadastrar-ong" component={CadastroOng} exact />
    
    {/* Rotas privadas: precisa ter a propriedade isPrivate */}
    <Route path="/dashboard" component={DashboardInicio} exact isPrivate />
    <Route path="/dashboard/publicacoes" component={DashboardPublicacoes} exact isPrivate />
    <Route path="/dashboard/itens-de-doacoes" component={DashboardItem} exact isPrivate />
    <Route path="/dashboard/dados-da-ong" component={DashboardDados} exact isPrivate />
    <Route path="/dashboard/alterar-senha" component={DashboardAlterarSenha} exact isPrivate />
    <Route path="/dashboard/fotos" component={DashboardFotos} exact isPrivate />
  </Switch>
);

export default Routes;
