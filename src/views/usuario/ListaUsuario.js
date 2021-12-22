import React from 'react';
import Card from '../../components/Card';
import DataTable from '../../components/DataTable';
import LocalStorageService from '../../app/service/localStorageService';
import ValidarUsuario from '../../app/service/ValidarUsuario';
import UsuarioService from '../../app/service/usuarioService';
import { MDBIcon } from 'mdbreact';
import Icon from '@mdi/react'
import { mdiToggleSwitchOff,mdiAccountEdit   } from '@mdi/js'

export default class ListaUsuario extends React.Component{

    state = {
        usuarios:[]
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    componentDidMount(){
      ValidarUsuario.usuarioLogado();
      if(ValidarUsuario.usuarioLogado()){
        this.service.buscarTodos().then(response => {
            this.setState({usuarios:response.data});     
            this.state.usuarios.forEach(usuario => {
                usuario.buttom = 
                <spam>
                  { usuario.status === "ATIVO" ?(
                    
                    <a onClick={e => this.desativar(usuario.id)}><Icon path={mdiToggleSwitchOff } title={"Ativar"} size={1.3} horizontal color="green" /></a>  
                    
                    ):(
                    <a onClick={e => this.ativar(usuario.id)}><Icon path={mdiToggleSwitchOff } title={"Desativar"} size={1.3} vertical color="gray" /></a>  
                    
                    )
                    
                  }
                  <a onClick={e => this.editar(usuario.id)}><Icon path={mdiAccountEdit} title={"Editar"} size={1.1} color="blue" /></a>  
                </spam>
            });
            this.setState({});
        }).catch(error => {
            console.log(error);
        });
      }
    }

    ativar = (id) => {
      this.service.ativar(id).then(response => {
        this.componentDidMount();
      }).catch(erro => {
        console.log(erro);
      });
    }

    desativar = (id) => {
      this.service.desativar(id).then(response => {
        this.componentDidMount();
      }).catch(erro => {
        console.log(erro);
      });
    }

    editar = (id) => {
        const usuarios = this.state.usuarios;
        let usuario = usuarios.filter((usuarios) => usuarios.id == id);
        usuario = usuario.pop();
        LocalStorageService.adicionarItem('_usuario_edit', usuario);
        this.props.history.push('/cadastro-usuario');
    }

    novoCadastro = () => {
        LocalStorageService.removerItem("_usuario_edit");
        this.props.history.push('/cadastro-usuario');
    }

    render(){
        const datatable = {
            columns: [
              {
                label: 'Nome',
                field: 'nome',
                width: 150,
                attributes: {
                  'aria-controls': 'DataTable',
                  'aria-label': 'Name',
                },
              },
              {
                label: 'Login',
                field: 'email',
                width: 270,
              },
              {
                label: 'Perfil',
                field: 'perfil',
                width: 270,
              },
              {
                label: 'Status',
                field: 'status',
                width: 270,
                css: {
                  'color': 'blue',
                }
              },
              {
                label: 'Ações',
                field: 'buttom',
                width: 200,
              }
            ],
            rows: this.state.usuarios
            ,
          };
        return(            
            <Card title="Lista de Usuários">
                <button className="btn btn-sm btn-primary" onClick={this.novoCadastro}>Novo Cadastro</button>
                <DataTable datatable={datatable} />
            </Card>            
        );
    }


}