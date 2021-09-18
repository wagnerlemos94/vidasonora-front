import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamneseRadioButton from './AnamneseRadioButton';
import Select from 'react-select';
import Comobirdades from './Comorbidades';
import Queixas from './Queixas';
import RadioButtonSimNao from './RadioButtonSimNao';
import {MDBInputGroup} from 'mdbreact';


class Anamnese extends React.Component{
    
    state = {    
        historicoOutraDoencaInput:0, 
        acompanahmentoMedicoInput:0,
        options:[
            {
                label:"NENHUM"
            },
            {
                label:"CLÍNICO GERAL"
            },
            {
                label:"OTORRINOLARINGOLOGISTA"
            },
            {
                label:"NEUROLOGISTA"
            },
            {
                label:"PEDIATRA"
            },
            {
                label:"PSICOLOGO"
            },
            {
                label:"PSICOPEDAGOGO"
            },
            {
                label:"NEUROPEDIATRA"
            },
            {
                label:"OUTROS"
            }
        ]
    }

    funct = () =>{
        alert()
    }

    render(){
        return(
            <div>
                <FormGroup htmlForm="principalQueixa" label="Principal Queixa:">
                    <input type="text" className="form-control" placeholder="Ex: Dificuldade de escultar"
                        onChange={e => this.props.anamnese.principalQueixa = e.target.value}
                        required
                        />
                </FormGroup>
                <div className="row">
                    <div className="col-6">
                        <FormGroup htmlForm="encaminhadoPor" label="Encaminhado por: ">
                            <Select options={this.state.options}
                                onChange={e => this.props.anamnese.encaminhadoPor = e.label}
                                />
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup htmlForm="nomeMedico" label="Nome Medico:">
                            <input type="text" className="form-control" placeholder="Ex: Dr. Daniel"
                                onChange={e => this.props.anamnese.nomeMedico = e.target.value}
                                required
                                />
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup htmlForm="preferenciaManual" label="Preferência manual :">
                            <select className="form-control" defaultValue=""
                                onChange={e => this.props.anamnese.preferenciaManual = e.target.value}
                                required
                            >
                                <option value="" disabled>Selecione...</option>
                                <option value="DESTRA">DESTRA</option>
                                <option value="CANHOTA">CANHOTA</option>
                            </select>
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup htmlForm="escolaridade" label="Escolaridade :">
                            <input type="text" className="form-control" placeholder="Ex: Superior Completo"
                                onChange={e => this.props.anamnese.escolaridade = e.target.value}
                                required
                                />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Comobirdades comorbidades={this.props.anamnese.comorbidades}/>
                    </div>
                    <div className="col">
                        <Card title="Uso De AASI">
                            <AnamneseRadioButton className="mb-5" name="usoAASI" id="usoAASI" valorChekbox={this.props.anamnese.usoAASI} 
                                 onChange={e => this.props.anamnese.usoAASI = e.target.value}
                            />
                        </Card>
                    </div>
                    <div className="col">
                        <Card title="Zumbido">
                            <AnamneseRadioButton className="mb-5" name="zumbido" id="zumbido" valorChekbox={this.props.anamnese.zumbido} 
                                 onChange={e => this.props.anamnese.zumbido = e.target.value}
                            />
                        </Card>
                    </div>
                </div>
                <div className="row">                    
                    <Queixas titulo="QUEIXAS AUDITIVAS OE" name="esquerdo" queixas={this.props.anamnese.queixas.oe}/>
                    <Queixas titulo="QUEIXAS AUDITIVAS OD" name="direito" queixas={this.props.anamnese.queixas.od}/>
                </div>
                <div className="col mt-2">
                    <div className="row">
                        <div className="col">
                            <FormGroup className="row" htmlForm="acompanahmentoMedico" label="Está em acompanhamento médico?">
                                <RadioButtonSimNao className="ml-2" name="acompanahmentoMedico" 
                                id="acompanahmentoMedico"htmlForm="acompanahmentoMedico" 
                                onChange={e => (this.props.anamnese.acompanahmentoMedico = e.target.value,
                                    this.setState({acompanahmentoMedicoInput : e.target.value}))
                                }
                                />
                            {this.state.acompanahmentoMedicoInput === "1"?(
                                <MDBInputGroup
                                className="col-7"
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Início e motivo:"
                                size="sm"
                                onChange={e => this.props.anamnese.acompanahmentoMedicoInput = e.target.value}
                                />
                                ):(
                                    this.props.anamnese.acompanahmentoMedicoInput = "")
                                }
                            </FormGroup>
                        </div>
                        <div className="col-4">
                            <FormGroup className="row" htmlForm="historicoOutraDoenca" label="Historico de outras Doenças">
                                <RadioButtonSimNao className="ml-2" name="historicoOutraDoenca" 
                                id="historicoOutraDoenca"htmlForm="historicoOutraDoenca" 
                                onChange={e => (this.props.anamnese.historicoOutraDoenca = e.target.value,
                                    this.setState({historicoOutraDoencaInput : e.target.value}))
                                }
                                />
                            {this.state.historicoOutraDoencaInput === "1"?(
                                <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Quais e quando:"
                                size="sm"
                                onChange={e => this.props.anamnese.historicoOutraDoencaInput = e.target.value}
                                />
                                ):(
                                    this.props.anamnese.historicoOutraDoencaInput = "")
                                }
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Anamnese;