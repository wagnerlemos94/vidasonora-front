import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamnesePacRadioButton from './AnamnesePacRadioButton';
import Select from 'react-select';
import Comobirdades from './Comorbidades';
import Queixas from './Queixas';


class Anamnese extends React.Component{
    
    state = {     
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
                    <div className="col-6">
                        <Comobirdades comorbidades={this.props.anamnese.comorbidades}/>
                    </div>
                    <div className="col-6">
                        <Queixas queixas={this.props.anamnese.queixas}/>
                    </div>
                    <div className="col-4 mt-4">
                        <Card title="Perda auditiva">
                            <AnamnesePacRadioButton name="historicoPerdaAuditiva" id="historicoPerdaAuditiva" valorChekbox={this.props.anamnese.historicoPerdaAuditiva}
                                onChange={e => this.props.anamnese.historicoPerdaAuditiva = e.target.value}
                              />
                        </Card>
                    </div>
                    <div className="col-4 mt-4">
                        <Card title="Uso De AASI">
                            <AnamnesePacRadioButton name="usoAASI" id="usoAASI" valorChekbox={this.props.anamnese.usoAASI} 
                                 onChange={e => this.props.anamnese.usoAASI = e.target.value}
                            />
                        </Card>
                    </div>
                    <div className="col-4 mt-4">
                        <Card title="Zumbido">
                            <AnamnesePacRadioButton name="zumbido" id="zumbido" valorChekbox={this.props.anamnese.zumbido} 
                                 onChange={e => this.props.anamnese.zumbido = e.target.value}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}




export default Anamnese;