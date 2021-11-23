import { MDBInput, MDBInputGroup } from 'mdbreact';
import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamneseRadioButton from './AnamneseRadioButton';
import MaiorDificuldadesAuditivas from './MaiorDificuldadesAuditivas';
import RadioButtonSimNao from './RadioButtonSimNao';


class Aparelho extends React.Component{
    render(){
        return(
            <div>
                <Card title="Anamnese Aparelho">
                    <FormGroup label="LAUDO DA AUDIOMETRIA:">
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
                    </FormGroup>
                    <FormGroup label="Historico de perda auditiva">
                        <AnamneseRadioButton className="mb-5" name={"historicoPerdaAuditiva"+this.props.name}
                            id="historicoPerdaAuditiva" onChange={
                                e => this.setState({
                                    ...this.props.aparelho.historicoPerdaAuditiva = e.target.value
                                })
                            }
                            
                            />
                    </FormGroup>
                    <FormGroup label="ETIOLOGIA DA PERDA AUDITIVA:">
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0"
                            hint="Descreva:"
                            size="sm"
                            onChange={
                                e => this.setState({
                                    ...this.props.aparelho.entiologiaPerdaAuditiva = e.target.value
                                })
                            }
                        />
                    </FormGroup>
                    <FormGroup label="ANTECEDENTES FAMILIARES PARA PERDA AUDITIVA:">
                        <RadioButtonSimNao className="mb-2 ml-2" name={"antencendentesFamiliarePerdaAuditiva"+this.props.name}
                            id="antencendentesFamiliarePerdaAuditiva" onChange={
                                e => this.setState({
                                    ...this.props.aparelho.antencendentesFamiliarePerdaAuditiva = e.target.value
                                })
                            }
                            />
                            {this.props.aparelho.antencendentesFamiliarePerdaAuditiva === "1" ?(
                                <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Descreva:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.aparelho.antencendentesFamiliarePerdaAuditivaInput = e.target.value
                                    })
                                }
                            />
                            ):(false)

                            }
                    </FormGroup>
                    <FormGroup label="JÁ FEZ USO DE AASI ANTERIORMENTE?">
                        <AnamneseRadioButton className="mb-5" name={"AASI"+this.props.name}
                            id="AASI" onChange={
                                e => this.setState({
                                    ...this.props.aparelho.usoAASI = e.target.value
                                })
                            }                        
                            />
                    </FormGroup>
                    {this.props.aparelho.usoAASI !== "1" && this.props.aparelho.usoAASI !== ""?(
                        <FormGroup label="Dados do último aparelho:">
                                <div className="row">
                                    <div className="col">
                                    <MDBInputGroup
                                        material
                                        containerClassName="mt-0"
                                        hint="Marca:"
                                        size="sm"
                                        onChange={
                                            e => this.setState({
                                                ...this.props.aparelho.aparelho.marca = e.target.value
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
                                                ...this.props.aparelho.aparelho.modelo = e.target.value
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
                                                ...this.props.aparelho.aparelho.tecnologia = e.target.value
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
                                                ...this.props.aparelho.aparelho.canais = e.target.value
                                                })
                                            }
                                            />
                                    </div>
                                </div>
                        </FormGroup>
                    ):(false)
                }
                    <div className="row">
                        <FormGroup label="Está satisfeito com esse aparelho?">
                        <div className="col">
                            <MDBInputGroup
                                material
                                containerClassName="mt-0"
                                hint="Descreva:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.aparelho.aparelho.satisfeito = e.target.value
                                    })
                                }
                                />
                        </div>
                        </FormGroup>
                        <div className="col">
                            <FormGroup label="Som natural?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.aparelho.sonNatural = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>
                        </div>
                        <FormGroup label="O que você não gostava nesse aparelho?">
                        <div className="col">
                            <MDBInputGroup
                                material
                                containerClassName="mt-0"
                                hint="Descreva:"
                                size="sm"
                                onChange={
                                    e => this.setState({
                                        ...this.props.aparelho.aparelho.gostoAparelho = e.target.value
                                    })
                                }
                                />
                                </div>
                        </FormGroup>
                        <div className="col">
                            <FormGroup label="Já teve problemas?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.aparelho.teveProblema = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>                    
                        </div>
                        <div className="col">
                            <FormGroup label="O que gostava?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.aparelho.oqGostava = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>                    
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="form-check mr-4">
                            <input className="form-check-input" type="checkbox" id="sus" 
                                onChange={e => this.props.aparelho.aparelho.sus = e.target.checked}
                                />
                            <label className="form-check-label" htmlFor="sus">
                                SUS
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="particular" 
                                onChange={e => this.props.aparelho.aparelho.particular = e.target.checked}
                                />
                            <label className="form-check-label" htmlFor="particular">
                                Particular
                            </label>
                        </div>
                    </div>
                    <FormGroup label="Desconforto sons intensos:" className="form-inline mt-2">
                            <RadioButtonSimNao className="ml-2" name="desconfortoSonsIntensos"
                                onChange={e => this.setState({
                                    ...this.props.aparelho.aparelho.desconfortoSonsIntensos = e.target.value
                                })}    
                            />
                    </FormGroup>
                    <FormGroup label="É importante para você ouvir melhor?">
                        <MDBInputGroup
                            material
                            containerClassName="mt-0"
                            hint="Descreva:"
                            size="sm"
                            onChange={
                                e => this.setState({
                                    ...this.props.aparelho.aparelho.importanteOuvirMelhor = e.target.value
                                })
                            }
                            />
                    </FormGroup>
                    <FormGroup label="Por que você acha que o uso do aparelho seria útil?">
                        <MDBInputGroup
                            material
                            containerClassName="mt-0"
                            hint="Descreva:"
                            size="sm"
                            onChange={
                                e => this.setState({
                                    ...this.props.aparelho.aparelho.aparelhoSeriaUtil = e.target.value
                                })
                            }
                            />
                    </FormGroup>
                    <FormGroup label="Observações">
                        <MDBInput type="textarea" label="Descrava" outline size="lg" 
                            onChange={
                                e => this.setState({
                                    ...this.props.aparelho.aparelho.observacao = e.target.value
                                })
                            }
                        />
                    </FormGroup>

                </Card>
                {/* <MaiorDificuldadesAuditivas aparelho={this.props.queixas}/> */}
            </div>
        );
    }
}

export default Aparelho;