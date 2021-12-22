import React from 'react';
import Card from '../../components/Card';
import DataTable from '../../components/DataTable';
import LocalStorageService from '../../app/service/localStorageService';
import ValidarUsuario from '../../app/service/ValidarUsuario';
import UsuarioService from '../../app/service/usuarioService';
import { MDBIcon } from 'mdbreact';

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
                    
                    <a onClick={this.desativar}><MDBIcon id={usuario.id} title="Ativar" icon="toggle-on fa-lg" className="mr-2" style={{"color":"green"}}/></a>
                    
                    ):(
                    <a onClick={this.ativar}><MDBIcon id={usuario.id} title="Desativar" icon="toggle-off fa-lg" className="mr-2" style={{"color":"#747474"}}/></a>  
                      )
                      
                    }
                    <a onClick={this.editar}><MDBIcon id={usuario.id} title="Editar" icon="user-edit fa-lg" className="mr-2" style={{"color":"blue"}}/></a>
                </spam>
            });
            this.setState({});
        }).catch(error => {
            console.log(error);
        });
      }
    }

    ativar = (e) => {
      const id = e.target.id;
      this.service.ativar(id).then(response => {
        this.componentDidMount();
      }).catch(erro => {
        console.log(erro);
      });
    }

    desativar = (e) => {
      const id = e.target.id;
      this.service.desativar(id).then(response => {
        this.componentDidMount();
      }).catch(erro => {
        console.log(erro);
      });
    }

    editar = (event) => {
        const id = event.target.id
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