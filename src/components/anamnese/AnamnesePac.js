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
                </div>       
                <div className="row ml-2">
                    <div className="col form-check-inline">
                        <FormGroup className="mb-1" htmlForm="" label="Em que situação a conversação é mais difícil?">
                            <div className="form-checkbox">
                                <input className="form-check-input" type="checkbox" id="ambienteSilencioso" 
                                    onChange={e => this.props.comorbidades.ambienteSilencioso = e.target.checked}
                                />
                                <label className="form-check-label" htmlFor="ambienteSilencioso">
                                    Ambiente silencioso
                                </label>
                            </div>
                            <div className="form-checkbox">
                                <input className="form-check-input" type="checkbox" id="emGrupo" 
                                    onChange={e => this.props.comorbidades.emGrupo = e.target.checked}
                                />
                                <label className="form-check-label" htmlFor="emGrupo">
                                    Em grupo
                                </label>
                            </div>
                            <div className="form-checkbox">
                                <input className="form-check-input" type="checkbox" id="comInterlocutor" 
                                    onChange={e => this.props.comorbidades.comInterlocutor = e.target.checked}
                                />
                                <label className="form-check-label" htmlFor="comInterlocutor">
                                    Com um interlocutor
                                </label>
                            </div>
                            <div className="form-checkbox">
                                <input className="form-check-input" type="checkbox" id="ambienteRuidoso" 
                                    onChange={e => this.props.comorbidades.ambienteRuidoso = e.target.checked}
                                />
                                <label className="form-check-label" htmlFor="ambienteRuidoso">
                                    Ambiente ruidoso
                                    oscila independente do ambiente
                                </label>
                            </div>
                            <div className="form-checkbox">
                                <input className="form-check-input" type="checkbox" id="oscilaIndependenteAmbiente" 
                                    onChange={e => this.props.comorbidades.oscilaIndependenteAmbiente = e.target.checked}
                                />
                                <label className="form-check-label" htmlFor="oscilaIndependenteAmbiente">
                                    Oscila independente do ambiente
                                </label>
                            </div>
                        </FormGroup>
                    </div>
                </div>
            </Card>
        );
    }
}


export default AnamnesePac;