import React from 'react';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import { withRouter } from 'react-router-dom';
import ValidarUsuario from '../../app/service/ValidarUsuario';
import LocalStorageService from '../../app/service/localStorageService';

import UsuarioSerice from '../../app/service/usuarioService';
import { mensagemErro, mensagemSucesso } from '../../components/toastr';


class CadastroUsuario extends React.Component{
    
    state = {
        usuario:{
            nome:'',
            email: '',
            senha: '',
            senhaRepeticao: '',
            status: 1
        }
    }

    constructor(){
        super();
        this.service = new UsuarioSerice();
    }

    componentDidMount(){
        ValidarUsuario.usuarioLogado();
        const usuarioEdit = LocalStorageService.obterItem("_usuario_edit");
        if(usuarioEdit){    
            this.setState({
                usuario:usuarioEdit
            });
        } 
      }

    validacao = () => { 
        const msgs = [];
        
        if(this.state.email === "" || this.state.senha === "" || this.state.nome === ""){
            msgs.push("Preencha os campos Obrigatórios");
        }else if(this.state.senha !== this.state.senhaRepeticao){
            msgs.push("Senha estão diferentes");
        }

        return msgs;
    }

    sweetalert = () =>{
        const Swal = require('sweetalert2'); 
        Swal.fire({
            title: 'Sucesso!',
            text: 'Usuário cadastrada com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok',
            customClass: {
                confirmButton: 'btn btn-sm btn-primary',
              }
          }).then(result => {
            if(result.isConfirmed){
                this.props.history.push('/lista-usuarios');
            }
          });
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
            nome: this.state.usuario.nome,
            email : this.state.usuario.email,
            senha : this.state.usuario.senha,
            status : this.state.usuario.status
        }
        usuario.perfil = {
            'id': 1
        }
        this.service.salvar(usuario).then(response =>{
            this.sweetalert();
        }).catch( error => {
            mensagemErro(error.response.data);
        });
        
    }

    cancelar = () => {
        this.props.history.push('/lista-usuarios');
    }
    
    render(){
        return(
            <Card className="" title="Cadastro de Usuário">      
                <form className="">   
                    <FormGroup className="mt-3" label="Nome: *" htmlFor="inputEmail">
                        <input type="text" 
                        id="nome"
                        className="form-control"
                        name="email" 
                        value={this.state.usuario.nome}
                        onChange={ e => this.setState({usuario :{
                            ...this.state.usuario, 
                            nome :e.target.value
                            }})}
                        />
                    </FormGroup>                        
                    <FormGroup className="mt-3" label="Email: *" htmlFor="inputEmail">
                        <input type="text" 
                        id="inputEmail"
                        className="form-control"
                        name="email" 
                        value={this.state.usuario.email}
                        onChange={ e => this.setState({usuario :{
                            ...this.state.usuario, 
                            email :e.target.value
                            }})}
                        />
                    </FormGroup>

                    <FormGroup className="mt-3" label="Senha: *" htmlFor="inputSenha">
                        <input type="password" 
                        id="inputSenha"
                        className="form-control"
                        name="senha" 
                        onChange={ e => this.setState({usuario :{
                            ...this.state.usuario, 
                            senha :e.target.value
                            }})}/>
                    </FormGroup>

                    <FormGroup className="mt-3 mb-3" label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                        <input type="password" 
                        id="inputRepitaSenha"
                        className="form-control"
                        name="repeticao" 
                        onChange={ e => this.setState({usuario :{
                            ...this.state.usuario, 
                            senhaRepeticao :e.target.value
                            }})}/>
                    </FormGroup>
                    <button onClick={this.cancelar} type="button" className="btn btn-md btn-danger">Cancelar</button>
                    <button onClick={this.cadastrar} type="button" className="btn btn-md btn-primary">Salvar</button>
                </form>

            </Card>
        );
    }
}

export default withRouter(CadastroUsuario);