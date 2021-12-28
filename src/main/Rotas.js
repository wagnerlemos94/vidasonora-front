import React from 'react';

import Home from '../components/Home';
import Login from '../views/Login';
import Usuario from '../views/usuario/Usuario';
import Pessoa from '../views/Pessoa';
import ListaPessoa from '../views/ListaPessoa';
import Prontuario from '../views/Prontuario';
import Anamnese from '../components/anamnese/Anamnese';

import { Route, Switch, HashRouter} from 'react-router-dom';
import ListaUsuario from '../views/usuario/ListaUsuario';
import HistoricoProntuario from '../components/HistoricoProntuario';
import HistoricoEvolucao from '../components/evolucao/HistoricoEvoluvoes';


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={Usuario} />
                <Route path="/lista-usuarios" component={ListaUsuario} />
                <Route path="/cadastro-pessoa" component={Pessoa} />
                <Route path="/lista-pessoa" component={ListaPessoa} />
                <Route path="/prontuario" component={Prontuario} />
                <Route path="/anamnese" component={Anamnese} />
                <Route path="/historico-evolucoes" component={HistoricoEvolucao} />
                <Route path="/historico-prontuario" component={HistoricoProntuario} />
            </Switch>
        </HashRouter>
    );
}

export default Rotas;