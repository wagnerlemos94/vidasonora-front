import React from 'react';
import UsuarioSerice from '../app/service/usuarioService';


class Home extends React.Component{

    state = {
        saldo : 0,
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
            <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
            
        </div>
        );
    }
}

export default Home;