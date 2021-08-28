import React from 'react';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import { withRouter } from 'react-router-dom';

import UsuarioSerice from '../app/service/usuarioService';
import { mensagemErro, mensagemSucesso } from '../components/toastr';


class CadastroUsuario extends React.Component{
    
    state = {
        email: '',
        senha: '',
        senhaRepeticao: '',
        status: 1
    }

    constructor(){
        super();
        this.service = new UsuarioSerice();
    }

    validacao = () => { 
        const msgs = [];
        
        if(this.state.senha !== this.state.senhaRepeticao){
            msgs.push("Senha estão diferentes");
        }

        return msgs;
    }

    cadastrar = () => {
        
        const msgs = this.validacao();

        if(msgs.length > 0){
            msgs.forEach((msg, index) => {
                mensagemErro(msg);
            });
            return false;
        }

        const usuario = {
            email : this.state.email,
            senha : this.state.senha,
            status : this.state.status
        }
        
        this.service.salvar(usuario).then(response =>{
            mensagemSucesso("Usuario cadastrado com suceso! Faça login para acessar o sistema.");
            this.props.history.push('/login');
        }).catch( error => {
            mensagemErro(error.response.data);
        });
        
    }

    cancelar = () => {
        this.props.history.push('/login');
    }
    
    render(){
        return(
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                           
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="text" 
                                id="inputEmail"
                                className="form-control"
                                name="email" 
                                onChange={e => this.setState({email : e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" 
                                id="inputSenha"
                                className="form-control"
                                name="senha" 
                                onChange={e => this.setState({senha : e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" 
                                id="inputRepitaSenha"
                                className="form-control"
                                name="repeticao" 
                                onChange={e => this.setState({senhaRepeticao : e.target.value})}/>
                            </FormGroup>
                        </div>
                        <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                        <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                    </div>

                </div>
            </Card>
        );
    }
}

export default withRouter(CadastroUsuario);