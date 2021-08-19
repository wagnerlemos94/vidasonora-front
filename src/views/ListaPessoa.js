import React from 'react';
import Card from '../components/Card';
import DataTable from '../components/dataTables/DataTable';

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

    editar = (event) => {
        const id = event.target.id
        this.service.buscarPessoa(id).then(response => {
        }).catch(error => {
            console.log(error.data.response);
        });
    }

    componentDidMount(){
        this.service.buscarTodos().then(response => {
            this.setState({pessoas:response.data});     
            this.state.pessoas.forEach(pessoa => {
                pessoa.edit = <a onClick={this.editar}><MDBIcon id={pessoa.id} title="Editar" icon="user-edit" /></a>
                pessoa.excluir = 'Excluir'
            });
            this.setState({});
        }).catch(error => {
            console.log(error.response.data);
        });
    }

    novoCadastro = () => {
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