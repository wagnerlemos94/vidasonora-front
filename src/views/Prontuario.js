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
            comorbidade:{
                nomes:[]
            },
            queixasAuditiva:{
                nomes:[],
                ouvidoDireito:[],
                ouvidoEsquerdo:[]
            }
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
                    <div className="col-12">
                        <Card title="Anamnese">
                            <div className="row">
                                <div className="col">
                                        <FormGroup htmlForm="queixaPrincipal" label="Queixa Principal:">
                                            <MDBInputGroup
                                                material
                                                containerClassName="mb-2 mt-0 disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.queixaPrincipal}                                            
                                                />   
                                        </FormGroup>
                                    </div>
                                    <div className="col">

                                        <FormGroup htmlForm="solicitante" label="Solicitante:">
                                            <MDBInputGroup
                                                material
                                                containerClassName="mb-2 mt-0 disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.solicitante}                                            
                                                /> 
                                        </FormGroup>
                                    </div>
                                    <div className="col">

                                        <FormGroup htmlForm="encaminhadoPor" label="Encaminhado por: ">
                                            <MDBInputGroup
                                                material
                                                containerClassName="mb-2 mt-0 disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.encaminhadoPor}                                            
                                                /> 
                                        </FormGroup>
                                    </div>
                                    <div className="col">

                                        <FormGroup htmlForm="preferenciaManual" label="Preferência manual :">
                                            <MDBInputGroup
                                                material
                                                containerClassName="mb-2 mt-0 disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.preferenciaManual}                                            
                                                /> 
                                        </FormGroup>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h5>Comorbidades</h5>
                                        {this.state.anamnese.comorbidade.nomes.map( (c) =>
                                            <div className="form-group">
                                                <p>{c} </p>
                                            </div>    
                                        )}

                                </div> 
                                <div className="col">
                                    <h5>Queixas Auditivas</h5>
                                        {this.state.anamnese.queixasAuditiva.nomes.map( (c) =>
                                            <div className="form-group">
                                                <p>{c} </p>
                                            </div>    
                                        )}
                                    </div>   
                                    <div className="col">
                                        <h5>Ouvido Direito</h5>
                                        {this.state.anamnese.queixasAuditiva.ouvidoDireito.map( (c) =>
                                            <div className="form-group">
                                                <p>{c} </p>
                                            </div>    
                                        )}
                                    </div>   
                                    <div className="col">
                                        <h5>Ouvido Esquerdo</h5>
                                        {this.state.anamnese.queixasAuditiva.ouvidoEsquerdo.map( (c) =>
                                            <div className="form-group">
                                                <p>{c} </p>
                                            </div>    
                                        )}
                                </div>    
                            </div>    
                        </Card>
                    </div>
                    
                    {/* {
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
                        this.state.anamnese.zumbido ? (
                        <div className="col">
                            <Card title="Zumbido"> {console.log(this.state.anamnese)}</Card>
                        </div>
                        ):(false)
                    } */}
                </div>
            </Card>
        );
    }
}


export default Prontuario;