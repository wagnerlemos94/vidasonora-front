import React from 'react';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import LocalStorageService from '../app/service/localStorageService';
import ValidarUsuario from '../app/service/ValidarUsuario';
import PessoaService from '../app/service/PessoaService';
import { MDBIcon } from 'mdbreact';

class ListaPessoa extends React.Component{

    state = {
        pessoas:[]
    }

    constructor(){
        super();
        this.service = new PessoaService();
    }

    componentDidMount(){
      ValidarUsuario.usuarioLogado();
      if(ValidarUsuario.usuarioLogado()){
        this.service.buscarTodos().then(response => {
            this.setState({pessoas:response.data});     
            this.state.pessoas.forEach(pessoa => {
                pessoa.edit = <a onClick={this.editar}><MDBIcon id={pessoa.id} title="Editar" icon="user-edit" /></a>
                pessoa.excluir = 'Excluir'
            });
            this.setState({});
        }).catch(error => {
            console.log(error);
        });
      }
    }

    editar = (event) => {
        const id = event.target.id
    
        const pessoas = this.state.pessoas;
        let pessoa = pessoas.filter((pessoa) => pessoa.id == id );
        pessoa = pessoa.pop(pessoa);
        
        const state = new Object();
        state.pessoa = pessoa;
        state.pessoa.nascimento = this.formartarData(pessoa.nascimento);
        state.titulo = 'Editar Cliente';
        state.pessoa.contatos.forEach(contato => {
          if(contato.tipo.toUpperCase() === 'celular'.toUpperCase()){
            state.idCelular = contato.id;
            state.celular = contato.contato;
          }else if(contato.tipo.toUpperCase() === 'email'.toUpperCase()){
            state.idEmail = contato.id;
            state.email = contato.contato;
            }
        });
        state.pessoa.contatos = [];
        state.pessoa.enderecos.forEach(endereco => {
          if(endereco){
            state.endereco = {
              id : endereco.id,
              cep : endereco.cep,
              bairro : endereco.bairro,
              rua : endereco.rua,
              numero : endereco.numero,
              cidade : {
                  nome:endereco.cidade.nome
              },
              estado:endereco.cidade.estado.nome,
              complemento: endereco.complemento
            }
          }
        });
        state.pessoa.enderecos = [];
        LocalStorageService.adicionarItem('_usuario_edit', state);
        this.props.history.push('/cadastro-pessoa');
    }

    formartarData(data){
       
      const ano = data.slice(-4);
      const mes = data.slice(3, -5);
      const dia = data.slice(0, -8);

      data = `${ano}-${mes}-${dia}`;
      
      return data;
    }

    novoCadastro = () => {
        LocalStorageService.removerItem("_usuario_edit");
        this.props.history.push('/cadastro-pessoa');
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
                label: 'Profissão',
                field: 'profissao',
                width: 270,
              },
              {
                label: 'Nascimento',
                field: 'nascimento',
                width: 270,
              },
              {
                label: 'Ações',
                field: 'edit',
                width: 200,
              }
            ],
            rows: this.state.pessoas
            ,
          };
        return(            
            <Card title="Lista de Clientes">
                <button className="btn btn-sm btn-primary" onClick={this.novoCadastro}>Novo Cadastro</button>
                <DataTable datatable={datatable} />
            </Card>            
        );
    }


}


export default ListaPessoa;