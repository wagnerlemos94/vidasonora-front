import React from 'react';
import Card from '../components/Card';
import PessoaService from '../app/service/PessoaService';
import LocalStorageService from '../app/service/localStorageService';
import { MDBInputGroup } from 'mdbreact';
import TonturaView from './tontura/TonturaView';
import ZumbidoView from './zumbido/ZumbidoView';
import AparelhoView from './aparelho/AparelhoView';
import Modal from '../components/Modal';
import Evolucao from '../components/Evolucao';
import { mdiClipboardTextClock } from '@mdi/js';
import Icon from '@mdi/react';

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
            data:"",
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
            prontuario:pessoa
        });
        if(anamnese){
            this.setState({
                anamnese:anamnese,
                anamneses:pessoa.anamneses
            });
        }
    }

    render(){
        return(
            <Card title="Prontuário">
                <div className="row">
                    <div className="col text-right">
                        <a href={"#/anamnese"} className="btn btn-sm btn-primary">Nova anamnese</a >
                        { this.state.anamnese.data != "" ? (
                            <>
                                <a className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#evolucao">Evolução</a >
                                {/* <a className="btn btn-sm btn-primary" href="#/historico-prontuario">Histórico</a > */}
                            </>
                        ):(false)                        
                    }
                    </div>
                </div>
                <Modal id="evolucao" titulo="Evolução" tamanhoModal="modal-xl" footerClass="d-none">
                    <Evolucao />
                </Modal>
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
                        {/* <a data-bs-toggle="modal" data-bs-target="#historicoAnamnese"><Icon path={mdiClipboardTextClock } title={"Histórico"} size={1.3} vertical color="blue" /></a>   */}
                        <Modal id="historicoAnamnese" titulo="Historico Anamnese" tamanhoModal="modal-sm" footerClass="d-none">

                        </Modal>
                            { this.state.anamnese.data != "" ? (
                                <>
                                 <div className="form-inline">
                                    <label>Data da Anamnese:</label>
                                    <label className="ml-2">{this.state.anamnese.data}</label>
                                </div>
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
                                            <div className={this.state.anamnese.comorbidade.nomes.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                                            <div className={this.state.anamnese.queixasAuditiva.nomes.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                                            <div className={this.state.anamnese.queixasAuditiva.ouvidoDireito.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                                            <div className={this.state.anamnese.queixasAuditiva.ouvidoEsquerdo.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                                        <hr />
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
                                </>
                            ):(
                                <div>
                                    <h1 className="text-center">Sem Informações</h1>
                                </div>
                            )

                            }
                             
                        </Card>
                    </div>
                </div>
            </Card>
        );
    }
}


export default Prontuario;