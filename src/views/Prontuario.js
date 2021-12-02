import React from 'react';
import Card from '../components/Card';
import PessoaService from '../app/service/PessoaService';
import ValidarUsuario from '../app/service/ValidarUsuario';
import LocalStorageService from '../app/service/localStorageService';
import { MDBInputGroup } from 'mdbreact';

class Prontuario extends React.Component{
    
    constructor(){
        super();
        this.service = new PessoaService();
    }

    state = {
       pessoa:{}
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

        const pessoa = LocalStorageService.obterItem('_usuario_prontuario');
        this.setState({pessoa:pessoa});
    }
    salvar = () => {
        const anamnese = this.state;
        console.log(anamnese);
    }

    render(){
        return(
            <Card title="Prontuário">
                <div className="row">
                    <div className="col text-right">
                        <button className="btn btn-sm btn-primary">Nova anamnese</button>
                    </div>
                </div>
                 <MDBInputGroup
                    material
                    containerClassName="mb-2 mt-0 disabled"
                    hint="Nome:"
                    size="sm"
                    value={this.state.pessoa.nome}
                    
                />                
            </Card>
        );
    }
}


export default Prontuario;