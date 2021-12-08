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
                id:"",
                nome:""
            }
        },
        anamnese:{

        }
    }
    
    componentDidMount(){
        const pessoa = LocalStorageService.obterItem('_usuario_prontuario');
        const anamnese = pessoa.anamneses.pop();
        this.setState({
            prontuario:pessoa,
            anamnese:anamnese
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
                <div className="row">
                    {
                        this.state.anamnese.comorbidade ? (
                        <div className="col">
                            <Card title="Comorbidades"> {console.log(this.state.anamnese)}</Card>
                        </div>
                        ):(false)
                    }{
                        this.state.anamnese.aparelho ? (
                        <div className="col">
                            <Card title="Aparelho"> {console.log(this.state.anamnese)}</Card>
                        </div>
                        ):(false)
                    }{
                        this.state.anamnese.queixasAuditiva ? (
                        <div className="col">
                            <Card title="Queixas Auditivas"> {console.log(this.state.anamnese)}</Card>
                        </div>
                        ):(false)
                    }{
                        this.state.anamnese.tontura ? (
                        <div className="col">
                            <Card title="Tontura"> {console.log(this.state.anamnese)}</Card>
                        </div>
                        ):(false)
                    }{
                        this.state.anamnese.zumbindo ? (
                        <div className="col">
                            <Card title="Zumbido"> {console.log(this.state.anamnese)}</Card>
                        </div>
                        ):(false)
                    }
                </div>
            </Card>
        );
    }
}


export default Prontuario;