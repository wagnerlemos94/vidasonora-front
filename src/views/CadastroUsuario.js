import React from 'react';

import Card from '../components/Card';
import FormGroup from '../components/Form-group';
import { withRouter } from 'react-router-dom';

import UsuarioSerice from '../app/service/usuarioService';
import { mensagemErro, mensagemSucesso } from '../components/toastr';


class CadastroUsuario extends React.Component{
    
    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor(){
        super();
        this.service = new UsuarioSerice();
    }

    validarSenha = () => { 
        if(!(this.state.senha == this.state.senhaRepeticao)){
            mensagemErro("Senha estão diferentes");
            const erro = true;
            return erro;
        }
    }

    cadastrar = () => {
        if(!this.validarSenha()){
            const usuario = {
                nome : this.state.nome,
                email : this.state.email,
                senha : this.state.senha
            }
            
            this.service.salvar(usuario).then(Response =>{
                mensagemSucesso("Usuario cadastrado com suceso! Faça login para acessar o sistema.");
                this.props.history.push('/login');
            }).catch( error => {
                mensagemErro(error.Response.data);
            });
        }
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
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                id="inputNome"
                                className="form-control"
                                name="nome" 
                                onChange={e => this.setState({nome : e.target.value})}/>
                            </FormGroup>

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