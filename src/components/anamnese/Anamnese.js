import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamneseRadioButton from './AnamneseRadioButton';
import Select from 'react-select';
import Comobirdades from './Comorbidades';
import Queixas from './Queixas';
import RadioButtonSimNao from './RadioButtonSimNao';
import {MDBInputGroup} from 'mdbreact';
import AnamneseService from '../../app/service/AnamneseService';


class Anamnese extends React.Component{

    constructor(){
        super();
        this.service = new AnamneseService();
        
    }

    state = {    
        historicoOutraDoencaInput:0, 
        acompanahmentoMedicoInput:0,
        options: []
    }

    componentDidMount(){
        this.setState({options:this.service.retornarArrayEncaminhaPor()});
    }

    render(){
        return(
            <div>
                <Card title="Anamnese">
                    <FormGroup htmlForm="principalQueixa" label="Principal Queixa:">
                        <input type="text" className="form-control" placeholder="Ex: Dificuldade de escultar"
                            
                            required
                            />
                    </FormGroup>
                    <div className="row">
                        <div className="col-6">
                            <FormGroup htmlForm="encaminhadoPor" label="Encaminhado por: ">
                                <Select options={this.state.options}
                                    
                                    />
                            </FormGroup>
                        </div>
                        <div className="col-6">
                            <FormGroup htmlForm="nomeMedico" label="Nome Medico:">
                                <input type="text" className="form-control" placeholder="Ex: Dr. Daniel"
                                    
                                    required
                                    />
                            </FormGroup>
                        </div>
                        <div className="col-6">
                            <FormGroup htmlForm="preferenciaManual" label="Preferência manual :">
                                <select className="form-control" defaultValue=""
                                    
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
                                    
                                    required
                                    />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-inline">
                            <div className="col btn btn-primary" id="comobirdade">Comobirdades</div>
                            <div className="col btn btn-primary" id="comobirdade">QUEIXAS AUDITIVAS</div>
                            <div className="col btn btn-primary" id="comobirdade">Tontura</div>
                            <div className="col btn btn-primary" id="comobirdade">Aparelho</div>
                            <div className="col btn btn-primary" id="comobirdade">zumbido</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <Comobirdades comorbidades={this.props.anamnese.comorbidades}/> */}
                        </div>
                    </div>
                    <div className="row">                    
                        {/* <Queixas titulo="QUEIXAS AUDITIVAS" name="esquerdo" queixas={this.props.anamnese.queixas.oe}/> */}
                        {/* <Queixas titulo="QUEIXAS AUDITIVAS OD" name="direito" queixas={this.props.anamnese.queixas.od}/> */}
                    </div>
                    <div className="col mt-2">
                        <div className="row">
                            <div className="col">
                                <FormGroup className="row" htmlForm="acompanahmentoMedico" label="Está em acompanhamento médico?">
                                    <RadioButtonSimNao className="ml-2" name="acompanahmentoMedico" 
                                    id="acompanahmentoMedico"htmlForm="acompanahmentoMedico"/>
                                {(true)?(
                                    <MDBInputGroup
                                    className="col-7"
                                    material
                                    containerClassName="mb-2 mt-0"
                                    hint="Início e motivo:"
                                    size="sm"
                                    
                                    />
                                    ):(
                                        false)
                                    }
                                </FormGroup>
                            </div>
                            <div className="col-4">
                                <FormGroup className="row" htmlForm="historicoOutraDoenca" label="Historico de outras Doenças">
                                    <RadioButtonSimNao className="ml-2" name="historicoOutraDoenca" 
                                    id="historicoOutraDoenca"htmlForm="historicoOutraDoenca"/>
                                {true?(
                                    <MDBInputGroup
                                    material
                                    containerClassName="mb-2 mt-0"
                                    hint="Quais e quando:"
                                    size="sm"
                                    
                                    />
                                    ):(
                                        false)
                                    }
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}




export default Anamnese;