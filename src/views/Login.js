import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
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
            mensagemErro(erro.response.data);
        });
    }

    render(){
        return(            
            <div className="row">
                
                <div className="col-md-6" style={ {position:'relative', left: '300px'}}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="" htmlFor="inputEmail">
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
                                            </FormGroup>
                                            <center>
                                                <button onClick={this.entrar} type="button" className="btn btn-primary">Login</button>                                        
                                            </center>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login); 