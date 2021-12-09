import { MDBInput, MDBInputGroup } from 'mdbreact';
import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import RadioButtonSimNao from './RadioButtonSimNao';

class AnamnesePac extends React.Component{

    state = {
        titulo:"Anamnese PAC"
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                <div className="row ml-2">
                    <div className="col-6">
                    <FormGroup className="row mb-1" htmlForm="compreendeConversacao" label="Compreende bem a conversação?">
                        <RadioButtonSimNao className="ml-3" name="compreendeConversacao" id="compreendeConversacao" htmlForm="compreendeConversacao"/>
                    </FormGroup>
                    </div>
                    <div className="col-6">
                    <FormGroup className="row mb-1" htmlForm="" label="Em que situação a conversação é mais difícil?">
                        <RadioButtonSimNao className="ml-3" name="conversacaoDificil" id="conversacaoDificil" htmlForm="conversacaoDificil"/>                    
                    </FormGroup>
                    </div>
                    <div className="col-6">
                    <FormGroup className="row mb-1" htmlForm="" label="Escuta bem em ambiente silencioso?">
                        <RadioButtonSimNao className="ml-3" name="ambienteSilencioso" id="ambienteSilencioso" htmlForm="ambienteSilencioso"/>                    
                    </FormGroup>
                    </div>
                    <div className="col-6">
                    <FormGroup className="row mb-1" htmlForm="" label="Escuta bem em ambiente ruidoso?">
                        <RadioButtonSimNao className="ml-3" name="ambienteRuidoso" id="ambienteRuidoso" htmlForm="ambienteRuidoso"/>                    
                    </FormGroup>
                    </div>
                    <div className="col-6">                        
                        <FormGroup className="row mb-1" htmlForm="" label="É desatento?">
                            <RadioButtonSimNao className="ml-3" name="desatento" id="desatento" htmlForm="desatento"/>                    
                        </FormGroup>
                    </div>
                    <div className="col-6">
                    <FormGroup className="row mb-1" htmlForm="" label="É muito quieto?">
                        <RadioButtonSimNao className="ml-3" name="muitoQuieto" id="muitoQuieto" htmlForm="muitoQuieto"/>                    
                    </FormGroup>
                    </div>
                    <div className="col-6">
                    <FormGroup className="row mb-1" htmlForm="" label="Localiza o som? ">
                        <RadioButtonSimNao className="ml-3" name="localizaSom" id="localizaSom" htmlForm="localizaSom"/>                    
                    </FormGroup>
                    </div>
                    <div className="col-6">
                    <FormGroup className="row mb-1" htmlForm="" label="É agitado?">
                        <RadioButtonSimNao className="ml-3" name="agitado" id="agitado" htmlForm="agitado"/>
                    </FormGroup>
                    </div>
                    <div className="col-12 form-check-inline">
                        <FormGroup className="mb-1" htmlForm="" label="Em que situação a conversação é mais difícil?">
                            <div className="row">
                                <div className="col-6">
                                    <input className="form-check-input" type="checkbox" id="ambienteRuidoso" 
                                        onChange={
                                            e => this.setState({
                                                ...this.props.anamnesePac.ambienteRuidoso = e.target.checked
                                            })
                                        }
                                            
                                    />
                                    <label className="form-check-label" htmlFor="ambienteRuidoso">
                                        Ambiente ruidoso
                                        oscila independente do ambiente
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input className="form-check-input" type="checkbox" id="oscilaIndependenteAmbiente" 
                                        onChange={
                                            e => this.setState({
                                                ...this.props.anamnesePac.oscilaIndependenteAmbiente = e.target.checked
                                            })
                                        }
                                            
                                    />
                                    <label className="form-check-label" htmlFor="oscilaIndependenteAmbiente">
                                        Oscila independente do ambiente
                                    </label>
                                </div>
                                <div className="col-6">
                                    <input className="form-check-input" type="checkbox" id="ambienteSilencioso" 
                                        onChange={
                                            e => this.setState({
                                                ...this.props.anamnesePac.ambienteSilencioso = e.target.checked
                                            })
                                        }
                                            
                                    />
                                    <label className="form-check-label" htmlFor="ambienteSilencioso">
                                        Ambiente silencioso
                                    </label>
                                </div>
                                <div className="col">
                                    <input className="form-check-input" type="checkbox" id="emGrupo" 
                                        onChange={
                                            e => this.setState({
                                                ...this.props.anamnesePac.emGrupo = e.target.checked
                                            })
                                        }
                                            
                                    />
                                    <label className="form-check-label" htmlFor="emGrupo">
                                        Em grupo
                                    </label>
                                </div>
                                <div className="col-12">
                                    <input className="form-check-input" type="checkbox" id="comInterlocutor" 
                                        onChange={
                                            e => this.setState({
                                                ...this.props.anamnesePac.comInterlocutor = e.target.checked
                                            })
                                        }
                                            
                                    />
                                    <label className="form-check-label" htmlFor="comInterlocutor">
                                        Com um interlocutor
                                    </label>
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Apresenta alguma dificuldade em fala?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.dificuldadeFala = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Apresenta alguma dificuldade em leitura/escrita?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.dificuldadeLeituraEscrita = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                    </div>
                    <div className="col-6">
                    <FormGroup className="mb-1" htmlForm="" label="Apresenta alguma outra dificuldade?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.outraDificuldade = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                    </div>
                    <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Demorou para aprender a falar?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.demorouAprenderFalar = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Demorou para aprender a andar?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.demorouAprenderAndar = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Apresenta alguma dificuldade em fala?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.dificuldadeFala = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Teve dificuldade para aprender a escrever?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.dificuldadeAprenderEscrever = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Teve outras dificuldades escolares? Quais?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.dificuldadeEscolares = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Teve dificuldade para aprender a escrever?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Quais:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.dificuldadeAprenderEscrever = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Apresentou repetência escolar?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Quantas vezes e em que série?:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.apresentouRepetenciaEscolar = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Tem boa memória?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Descreva"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.boaMemoria = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Está sendo medicado?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Descreva:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.sendoMedicado = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Teve episódio de otite, dor de ouvido, 
                                                                        principalmente nos primeiros anos de vida?">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Descreva:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.episodioOtiteDorOuvido = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Está em acompanhamento Fonoaudiológico? ">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Início e motivo:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.acompanhamentoFonoaudiologico = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Está em acompanhamento Psicológico? ">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Início e motivo:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.acompanhamentoPsicologico = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-6">
                        <FormGroup className="mb-1" htmlForm="" label="Está em acompanhamento psicopedagógico? ">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Início e motivo:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.acompanhamentoPsicopedagogico = e.target.value
                                    })
                                }
                                    
                            />
                        </FormGroup>
                        </div>
                        <div class="col-12">
                            <MDBInput type="textarea" label="Descrava" outline size="lg"
                                    onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.observacao = e.target.value
                                    })
                                }
                            />
                        </div> 
                        <div class="col-12">
                            <MDBInput type="textarea" label="Conclusão" outline size="lg"
                                    onChange={
                                    e => this.setState({
                                        ...this.props.anamnesePac.conclusao = e.target.value
                                    })
                                }
                            />                        
                        </div> 
                        <div className="col">
                            <FormGroup className="mb-1" htmlForm="" label="Anamnese sugere risco para DPA?">
                                <RadioButtonSimNao className="mb-2 ml-2" name={"riscoDPA"}
                                    id="riscoDPA" onChange={
                                        e => this.setState({
                                            ...this.props.anamnesePac.riscoDPA = e.target.value
                                        })
                                    }
                                />
                            </FormGroup>  
                        </div>
                </div>                    
            </Card>
        );
    }
}


export default AnamnesePac;