import { MDBInput, MDBInputGroup } from 'mdbreact';
import React from 'react';
import Card from '../Card';
import AnamneseRadioButton from './AnamneseRadioButton';
import MaiorDificuldadesAuditivas from './MaiorDificuldadesAuditivas';
import RadioButtonSimNao from './RadioButtonSimNao';

class Aparelho extends React.Component{
    render(){
        return(
            <div>
                <Card title="Anamnese Aparelho">
                    <div className="row">
                        <div className="col">
                            <h5>Historico de perda auditiva:</h5>
                            <AnamneseRadioButton className="mb-5" name={"historicoPerdaAuditiva"+this.props.name}
                                id="historicoPerdaAuditiva" onChange={
                                    e => this.setState({
                                        ...this.props.aparelho.historicoPerdaAuditiva = e.target.value
                                    })
                                }
                                
                                />
                        </div>
                        <div className="col">
                            
                            <h5>Já fez uso de AASI anteriomente:</h5>
                                <AnamneseRadioButton className="mb-5" name={"AASI"+this.props.name}
                                    id="AASI" onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.usoAASI = e.target.value
                                        })
                                    }                        
                                    />
                            
                        </div>
                        <div className="col">
                            
                            <h5>Antecedentes Familiares para perda Auditiva:</h5>
                                <RadioButtonSimNao className="mb-2 ml-2" name={"antencendentesFamiliarePerdaAuditiva"+this.props.name}
                                    id="antencendentesFamiliarePerdaAuditiva" onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.antencendentesFamiliarePerdaAuditiva = e.target.value
                                        })
                                    }
                                    />
                                    {this.props.aparelho.antencendentesFamiliarePerdaAuditiva === "Sim" ?(
                                        <MDBInputGroup
                                        material
                                        containerClassName="mb-2 mt-0"
                                        hint="Descreva:"
                                        size="sm"
                                        onChange={
                                            e => this.setState({
                                                ...this.props.aparelho.antencendentesFamiliarePerdaAuditivaDescricao = e.target.value
                                            })
                                        }
                                    />
                                    ):(false)

                                    }
                            
                        </div>
                        <div className="col">
                            
                            <h5>Desconforto sons intensos:</h5>
                                <RadioButtonSimNao className="ml-2" name="desconfortoSonsIntensos"
                                    onChange={e => this.setState({
                                        ...this.props.aparelho.desconfortoSonsIntensos = e.target.value
                                    })}    
                                />
                            
                        </div>
                        <div className="col-12 mb-4">
                            <div className="form-inline">
                                <div className="form-check mr-4">
                                    <input className="form-check-input" type="checkbox" id="sus" value="SUS"
                                        onChange={e => this.props.aparelho.sus_particular.sus = e.target.value}
                                        />
                                    <label className="form-check-label" htmlFor="sus">
                                        SUS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="particular" value="Particular"
                                        onChange={e => this.props.aparelho.sus_particular.particular = e.target.value}
                                        />
                                    <label className="form-check-label" htmlFor="particular">
                                        Particular
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {this.props.aparelho.usoAASI !== "1" && this.props.aparelho.usoAASI !== ""?(
                                <div>
                                    <h5>Dados do último aparelho:</h5>
                                        <div className="row">
                                            <div className="col">
                                            <MDBInputGroup
                                                material
                                                containerClassName="mt-0"
                                                hint="Marca:"
                                                size="sm"
                                                onChange={
                                                    e => this.setState({
                                                        ...this.props.aparelho.marca = e.target.value
                                                        })
                                                    }
                                                    />
                                            </div>
                                            <div className="col">
                                            <MDBInputGroup
                                                material
                                                containerClassName="mt-0"
                                                hint="Modelo:"
                                                size="sm"
                                                onChange={
                                                    e => this.setState({
                                                        ...this.props.aparelho.modelo = e.target.value
                                                        })
                                                    }
                                                    />
                                            </div>
                                            <div className="col">
                                            <MDBInputGroup
                                                material
                                                containerClassName="mt-0"
                                                hint="Tecnologia:"
                                                size="sm"
                                                onChange={
                                                    e => this.setState({
                                                        ...this.props.aparelho.tecnologia = e.target.value
                                                        })
                                                    }
                                                    />
                                            </div>
                                            <div className="col">
                                            <MDBInputGroup
                                                material
                                                containerClassName="mt-0"
                                                hint="Canais:"
                                                size="sm"
                                                onChange={
                                                    e => this.setState({
                                                        ...this.props.aparelho.canais = e.target.value
                                                        })
                                                    }
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                
                            ):(false)
                        }
                        </div>
                        <div className="col-6">            
                            
                            <h5>LAUDO DA AUDIOMETRIA:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mb-2 mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.laudoAudiometria = e.target.value
                                        })
                                    }
                                />
                            
                        </div>
                        <div className="col-6">
                            
                            <h5>ETIOLOGIA DA PERDA AUDITIVA:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mb-2 mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.etilogiaPerdaAuditiva = e.target.value
                                        })
                                    }
                                />
                            
                            
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-6">
                            
                            <h5>Está satisfeito com esse aparelho:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.satisfeitoAparelho = e.target.value
                                        })
                                    }
                                    />
                            
                        </div>
                        <div className="col-6">
                            
                            <h5>Som natural:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.somNatural = e.target.value
                                        })
                                    }
                                    />
                            
                        </div>
                        <div className="col-6">
                            
                            <h5>O que você não gostava nesse aparelho:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.doQueNaoGostavaAparelho = e.target.value
                                        })
                                    }
                                    />
                            
                        </div>
                        <div className="col-6">
                            
                            <h5>Já teve problemas:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.jaTeveProblemas = e.target.value
                                        })
                                    }
                                    />
                            
                        </div>
                        <div className="col-6">
                            
                            <h5>O que gostava:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.doQueGostava = e.target.value
                                        })
                                    }
                                    />
                            
                        </div>
                        <div className="col-6">
                                
                                <h5>É importante para você ouvir melhor:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.importandeOuvirMelhor = e.target.value
                                        })
                                    }
                                    />
                            
                        </div>
                        <div className="col-12">
                            
                            <h5>Por que você acha que o uso do aparelho seria útil:</h5>
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.porQueAchaUsoAparelhoSeriaUtil = e.target.value
                                        })
                                    }
                                    />
                            
                        </div>
                    </div>
                    
                    <h5>Observações</h5>
                        <MDBInput type="textarea" label="Descrava" outline size="lg" 
                            onChange={
                                e => this.setState({
                                    ...this.props.aparelho.observacao = e.target.value
                                })
                            }
                        />
                    

                    <MaiorDificuldadesAuditivas maioresDificuldadeAuditivas={this.props.aparelho.maioresDificuldadeAuditivas}/>
                </Card>
            </div>
        );
    }
}

export default Aparelho;