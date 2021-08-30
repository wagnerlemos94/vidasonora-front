import React from 'react';
import Card from '../components/Card';
import Select from 'react-select';
import PessoaService from '../app/service/PessoaService';
import ValidarUsuario from '../app/service/ValidarUsuario';
import Anamnese from '../components/anamnese/Anamnese';

class Prontuario extends React.Component{
    
    constructor(){
        super();
        this.service = new PessoaService();
    }

    state = {
        titulo:'Prontuário',
        options:[]
    }
    
    componentDidMount(){
        if(ValidarUsuario.usuarioLogado()){
            this.service.buscarPessoasIdNome().then(response => {
                const pessoa = response.data;
                this.setState({options:pessoa});
            }).catch(erro => {
                console.log(erro);
            });
        }
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                  <Select options={this.state.options} />
                  <Anamnese />
            </Card>
        );
    }
}


export default Prontuario;