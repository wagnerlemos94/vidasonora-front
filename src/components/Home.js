import React from 'react';
import UsuarioSerice from '../app/service/usuarioService';
import { withRouter } from 'react-router-dom';
import ValidarUsuario from '../app/service/ValidarUsuario';


class Home extends React.Component{

    componentDidMount(){
        ValidarUsuario.usuarioLogado();
    }

    constructor(){
        super();
        this.usuarioService = new UsuarioSerice();
    }

    render(){
        return(
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
             <hr className="my-4" />
            
        </div>
        );
    }
}

export default withRouter(Home);