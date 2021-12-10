import React from 'react';
import Card from '../components/Card';
import PessoaService from '../app/service/PessoaService';
import LocalStorageService from '../app/service/localStorageService';
import { MDBInputGroup } from 'mdbreact';
import FormGroup from '../components/FormGroup';
import Tontura from './tontura/TonturaView';
import TonturaView from './tontura/TonturaView';
import ZumbidoView from './zumbido/ZumbidoView';
import AparelhoView from './aparelho/AparelhoView';

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
            queixaPrincipal:"",
            solicitante:"",
            encaminhadoPor:"",
            preferenciaManual:"",
            comorbidade:{
                nomes:[]
            },
            queixasAuditiva:{
                nomes:[],
                ouvidoDireito:[],
                ouvidoEsquerdo:[]
            },
            tontura:{},
            zumbido:{},
            aparelho:{}
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
                <div className="form-inline">
                    <label>Paciente:</label>
                    <MDBInputGroup
                        material
                        containerClassName="col mb-4 mt-0 disabled"
                        hint="Nome:"
                        size="sm"
                        value={this.state.prontuario.pessoa.nome}
                        
                        />  
                        </div>
                <div className="row">
                    <div className="col-12">
                        <Card title="Anamnese">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-inline">
                                            <label>Queixa Princical:</label>
                                            <MDBInputGroup
                                                material
                                                containerClassName="col disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.queixaPrincipal}                                            
                                                />   
                                        </div>
                                    </div>
                                    <div className="col-6">

                                        <div className="form-inline">
                                            <label>Solicitante:</label>
                                            <MDBInputGroup
                                                material
                                                containerClassName="col disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.solicitante}                                            
                                                /> 
                                        </div>
                                    </div>
                                    <div className="col-6">

                                        <div className="form-inline">
                                            <label>Encaminhado Por:</label>
                                            <MDBInputGroup
                                                material
                                                containerClassName="col disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.encaminhadoPor}                                            
                                                /> 
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-inline">
                                            <label>Preferencia Manual</label>
                                            <MDBInputGroup
                                                material
                                                containerClassName="col disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.preferenciaManual}                                            
                                                /> 
                                        </div>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-inline">
                                        <label>Comorbidades:</label>
                                            <MDBInputGroup
                                                material
                                                containerClassName="col disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.comorbidade.nomes}
                                            />                                         
                                    </div>
                                </div> 
                                <div className="col-12">
                                    <div className="form-inline">
                                        <label>Queixas Auditivas</label>
                                        <MDBInputGroup
                                                material
                                                containerClassName="col disabled"
                                                hint="Nome:"
                                                size="sm"
                                                value={this.state.anamnese.queixasAuditiva.nomes}
                                            /> 
                                        </div>    
                                </div>   
                                <div className="col-6">
                                    <div className="form-inline">
                                        <label>Ouvido Direito</label>
                                        <MDBInputGroup
                                            material
                                            containerClassName="col disabled"
                                            hint="Nome:"
                                            size="sm"
                                            value={this.state.anamnese.queixasAuditiva.ouvidoDireito}
                                        /> 
                                    </div>    
                                </div>   
                                <div className="col-6">
                                    <div className="form-inline">
                                        <label>Ouvido Esquerdo</label>
                                        <MDBInputGroup
                                            material
                                            containerClassName="col disabled"
                                            hint="Nome:"
                                            size="sm"
                                            value={this.state.anamnese.queixasAuditiva.ouvidoEsquerdo}
                                        /> 
                                    </div>    
                                </div>    
                                <div className="col-12">
                                    <TonturaView tontura={this.state.anamnese.tontura}/>
                                </div>
                                <div className="col-12">
                                    <ZumbidoView zumbido={this.state.anamnese.zumbido}/>
                                </div>
                                <div className="col-12">
                                    <AparelhoView aparelho={this.state.anamnese.aparelho}/>
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