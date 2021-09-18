import { MDBInputGroup } from 'mdbreact';
import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamneseRadioButton from './AnamneseRadioButton';
import RadioButtonSimNao from './RadioButtonSimNao';


class Aparelho extends React.Component{
    render(){
        return(
            <Card title="Anamnese Aparelho">
                <FormGroup label="LAUDO DA AUDIOMETRIA:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint="Descreva:"
                        size="sm"
                        onChange={
                            e => this.setState({
                                ...this.props.queixas.laudoAudiometria = e.target.value
                            })
                        }
                    />
                </FormGroup>
                <FormGroup label="Historico de perda auditiva">
                    <AnamneseRadioButton className="mb-5" name={"historicoPerdaAuditiva"+this.props.name}
                        id="historicoPerdaAuditiva" onChange={
                            e => this.setState({
                                ...this.props.queixas.historicoPerdaAuditiva = e.target.value
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
                                ...this.props.queixas.entiologiaPerdaAuditiva = e.target.value
                            })
                        }
                    />
                </FormGroup>
                <FormGroup label="ANTECEDENTES FAMILIARES PARA PERDA AUDITIVA:">
                    <RadioButtonSimNao className="mb-2 ml-2" name={"antencendentesFamiliarePerdaAuditiva"+this.props.name}
                        id="antencendentesFamiliarePerdaAuditiva" onChange={
                            e => this.setState({
                                ...this.props.queixas.antencendentesFamiliarePerdaAuditiva = e.target.value
                            })
                        }
                        />
                        {this.props.queixas.antencendentesFamiliarePerdaAuditiva === "1" ?(
                             <MDBInputGroup
                             material
                             containerClassName="mb-2 mt-0"
                             hint="Descreva:"
                             size="sm"
                             onChange={
                                 e => this.setState({
                                     ...this.props.queixas.antencendentesFamiliarePerdaAuditivaInput = e.target.value
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
                                ...this.props.queixas.usoAASI = e.target.value
                            })
                        }                        
                        />
                </FormGroup>
                {this.props.queixas.usoAASI !== "1" && this.props.queixas.usoAASI !== ""?(
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
                                            ...this.props.queixas.aparelho.marca = e.target.value
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
                                            ...this.props.queixas.aparelho.modelo = e.target.value
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
                                            ...this.props.queixas.aparelho.tecnologia = e.target.value
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
                                            ...this.props.queixas.aparelho.canais = e.target.value
                                            })
                                        }
                                        />
                                </div>
                            </div>
                    </FormGroup>
                ):(false)
            }
            </Card>
        );
    }
}

export default Aparelho;