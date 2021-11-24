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
                    <div className="row">
                        <div className="col">
                            <FormGroup label="Historico de perda auditiva">
                                <AnamneseRadioButton className="mb-5" name={"historicoPerdaAuditiva"+this.props.name}
                                    id="historicoPerdaAuditiva" onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.historicoPerdaAuditiva = e.target.value
                                        })
                                    }
                                    
                                    />
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup label="Já fez uso de AASI anteriomente?">
                                <AnamneseRadioButton className="mb-5" name={"AASI"+this.props.name}
                                    id="AASI" onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.usoAASI = e.target.value
                                        })
                                    }                        
                                    />
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup label="Antecedentes Familiares para perda Auditiva:">
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
                                                ...this.props.aparelho.antencendentesFamiliarePerdaAuditivaDescricao = e.target.value
                                            })
                                        }
                                    />
                                    ):(false)

                                    }
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup label="Desconforto sons intensos:" className="form-inline mt-2">
                                <RadioButtonSimNao className="ml-2" name="desconfortoSonsIntensos"
                                    onChange={e => this.setState({
                                        ...this.props.aparelho.desconfortoSonsIntensos = e.target.value
                                    })}    
                                />
                            </FormGroup>
                        </div>
                        <div className="col-12 mb-4">
                            <div className="form-inline">
                                <div className="form-check mr-4">
                                    <input className="form-check-input" type="checkbox" id="sus" value="SUS"
                                        onChange={e => this.props.aparelho.sus = e.target.value}
                                        />
                                    <label className="form-check-label" htmlFor="sus">
                                        SUS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="particular" value="Particular"
                                        onChange={e => this.props.aparelho.particular = e.target.value}
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
                                </FormGroup>
                            ):(false)
                        }
                        </div>
                        <div className="col-6">            
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
                        </div>
                        <div className="col-6">
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
                            
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-6">
                            <FormGroup label="Está satisfeito com esse aparelho?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.satisfeito = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>
                        </div>
                        <div className="col-6">
                            <FormGroup label="Som natural?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.sonNatural = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>
                        </div>
                        <div className="col-6">
                            <FormGroup label="O que você não gostava nesse aparelho?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.gostoAparelho = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>
                        </div>
                        <div className="col-6">
                            <FormGroup label="Já teve problemas?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.teveProblema = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>                    
                        </div>
                        <div className="col-6">
                            <FormGroup label="O que gostava?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.oqGostava = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>                    
                        </div>
                        <div className="col-6">
                                <FormGroup label="É importante para você ouvir melhor?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.importanteOuvirMelhor = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>
                        </div>
                        <div className="col-12">
                            <FormGroup label="Por que você acha que o uso do aparelho seria útil?">
                                <MDBInputGroup
                                    material
                                    containerClassName="mt-0"
                                    hint="Descreva:"
                                    size="sm"
                                    onChange={
                                        e => this.setState({
                                            ...this.props.aparelho.aparelhoSeriaUtil = e.target.value
                                        })
                                    }
                                    />
                            </FormGroup>
                        </div>
                    </div>
                    <FormGroup label="Observações">
                        <MDBInput type="textarea" label="Descrava" outline size="lg" 
                            onChange={
                                e => this.setState({
                                    ...this.props.aparelho.observacao = e.target.value
                                })
                            }
                        />
                    </FormGroup>

                    <MaiorDificuldadesAuditivas aparelho={this.props.aparelho}/>
                </Card>
            </div>
        );
    }
}

export default Aparelho;