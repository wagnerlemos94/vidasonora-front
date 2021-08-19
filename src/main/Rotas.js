import React from 'react';

import Home from '../components/Home';
import Login from '../views/Login';
import CadastroUsuario from '../views/CadastroUsuario';
import CadastroPessoa from '../views/CadastroPessoa';
import ListaPessoa from '../views/ListaPessoa';

import { Route, Switch, HashRouter} from 'react-router-dom';


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route path="/cadastro-pessoa" component={CadastroPessoa} />
                <Route path="/lista-pessoa" component={ListaPessoa} />
            </Switch>
        </HashRouter>
    );
}

export default Rotas;