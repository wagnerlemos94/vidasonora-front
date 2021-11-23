import React from 'react';

import Home from '../components/Home';
import Login from '../views/Login';
import CadastroUsuario from '../views/CadastroUsuario';
import Pessoa from '../views/Pessoa';
import ListaPessoa from '../views/ListaPessoa';
import Prontuario from '../views/Prontuario';
import Anamnese from '../components/anamnese/Anamnese';

import { Route, Switch, HashRouter} from 'react-router-dom';


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route path="/cadastro-pessoa" component={Pessoa} />
                <Route path="/lista-pessoa" component={ListaPessoa} />
                <Route path="/prontuario" component={Prontuario} />
                <Route path="/anamnese" component={Anamnese} />
            </Switch>
        </HashRouter>
    );
}

export default Rotas;