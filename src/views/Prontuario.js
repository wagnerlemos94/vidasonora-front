import React from 'react';
import Card from '../components/Card';
import PessoaService from '../app/service/PessoaService';
import LocalStorageService from '../app/service/localStorageService';
import { MDBInputGroup } from 'mdbreact';
import FormGroup from '../components/FormGroup';

class Prontuario extends React.Component{
    
    constructor(){
        super();
        this.service = new PessoaService();
    }

    state = {
        prontuario:{
            pessoa:{
                nome:""
            }
        }
    }
    
    componentDidMount(){
        const pessoa = LocalStorageService.obterItem('_usuario_prontuario');
        this.setState({
            prontuario:pessoa
        });
    }

    render(){
        return(
            <Card title="Prontuário">
                <div className="row">
                    <div className="col text-right">
                        <a href={"#/anamnese"} className="btn btn-sm btn-primary">Nova anamnese</a >
                    </div>
                </div>
                <FormGroup htmlForm="cliente" label="Cliente:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0 disabled"
                        hint="Nome:"
                        size="sm"
                        value={this.state.prontuario.pessoa.nome}
                        
                    />   
                </FormGroup>             
            </Card>
        );
    }
}


export default Prontuario;