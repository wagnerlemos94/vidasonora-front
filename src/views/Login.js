import React from 'react';
import Card from '../components/Card';
import { withRouter } from 'react-router-dom';
import UsuarioSerice from '../app/service/usuarioService';
import ValidarUsuario from '../app/service/ValidarUsuario';
import { mensagemErro } from '../components/toastr';

import {MDBInput } from 'mdbreact';



class Login extends React.Component{

    state = {
        email: '',
        senha:'',
    }

    constructor(){
        super();
        this.service = new UsuarioSerice;
    }
    
    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            ValidarUsuario.login(response.data);
        }).catch(erro => {
            try {            
                mensagemErro(erro.response.data);
            } catch (error) {
                mensagemErro("Sistema Indisponível");
            }
        });
    }

    render(){
        return(   
            <div className='mt-5' style={ {position:'relative', left: '25%', width: '50%'}}>
                <Card  className="mx-5" title="Vidasonora - login">
                    <MDBInput label="Email: *" icon="envelope" group type="email" validate error="wrong"
                            success="right"
                            id="inputEmail"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
                        />                                  
                    <MDBInput label="password" icon="lock" group type="password"
                        value={this.state.senha}
                        onChange={e => this.setState({senha: e.target.value})}
                        id="inputPassword"
                        validate />
                    <center>
                        <button onClick={this.entrar} type="button" className="col btn btn-primary">Login</button>                                        
                    </center>
                </Card>
            </div>      
        );
    }
}

export default withRouter(Login); 