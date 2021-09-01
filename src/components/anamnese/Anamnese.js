import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamnesePacRadioButton from './AnamnesePacRadioButton';


class Anamnese extends React.Component{
    
    state = {
       
    }

    salvar = () =>{
        const prontuario = this.state.prontuario
        prontuario.comorbidades = this.state.comorbidades;
        prontuario.queixas = this.state.queixas;
        console.log(prontuario);
    }

    render(){
        return(
            <div >
            <Card title={this.state.titulo}>
                <FormGroup htmlForm="nomeMedico" label="Encaminhado por :">
                    <input type="text" className="form-control" placeholder="Ex: Dr. Daniel"
                        // value={this.state.prontuario.nomeMedico}
                       onChange={e => this.props.anamnese.prontuario.nomeMedico = e.target.value}
                        required
                    />
                </FormGroup>
                <div className="row">
                    <div className="col">
                        <FormGroup htmlForm="preferenciaManual" label="Preferência manual :">
                            <select className="form-control" defaultValue=""
                                onChange={e => this.props.anamnese.prontuario.preferenciaManual = e.target.value}
                                 required
                            >
                                <option value="" disabled>Selecione...</option>
                                <option value="DESTRA">DESTRA</option>
                                <option value="CANHOTA">CANHOTA</option>
                            </select>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup htmlForm="escolaridade" label="Escolaridade :">
                            <input type="text" className="form-control" placeholder="Ex: Superior Completo"
                                onChange={e => this.props.anamnese.prontuario.escolaridade = e.target.value}
                                required
                                />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mb-2">
                        <Card title="Perda auditiva">
                            <AnamnesePacRadioButton name="historicoPerdaAuditiva" id="historicoPerdaAuditiva" valorChekbox={this.props.anamnese.prontuario.historicoPerdaAuditiva}
                                onChange={e => this.props.anamnese.prontuario.historicoPerdaAuditiva = e.target.value}
                              />
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card title="Uso De AASI">
                            <AnamnesePacRadioButton name="usoAASI" id="usoAASI" valorChekbox={this.props.anamnese.prontuario.usoAASI} 
                                 onChange={e => this.props.anamnese.prontuario.usoAASI = e.target.value}
                            />
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card title="Zumbido">
                            <AnamnesePacRadioButton name="zumbido" id="zumbido" valorChekbox={this.props.anamnese.prontuario.zumbido} 
                                 onChange={e => this.props.anamnese.prontuario.zumbido = e.target.value}
                            />
                        </Card>
                    </div>
                    <div className="col">
                        <Card title="Comobirdades">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="hipertensao"
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.comorbidades.hipertensao = e.target.value}
                                    />
                                <label className="form-check-label" htmlFor="hipertensao">
                                    Hipertensão
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="diabetes"
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.comorbidades.diabetes = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="diabetes">
                                    Diabetes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="colesterolAlto" 
                                   value="SIM"
                                   onChange={e => this.props.anamnese.prontuario.comorbidades.colesterolAlto = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="colesterolAlto">
                                    Colesterol alto
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="doencasHormonais" 
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.comorbidades.doencasHormonais = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="doencasHormonais">
                                    Doenças hormonais
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="doencasMetabolicas" 
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.comorbidades.doencasMetabolicas = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="doencasMetabolicas">
                                    Doenças metabólicas
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="doencasInfecciosas" 
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.comorbidades.doencasInfecciosas = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="doencasInfecciosas">
                                    Doenças infecciosas
                                </label>
                            </div>
                        </Card>
                    </div>
                    <div className="col">
                        <Card title="Queixas">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prurido"
                                     value="SIM"
                                     onChange={e => this.props.anamnese.prontuario.queixas.prurido = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="prurido">
                                    Prurido
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="otorreia" 
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.queixas.otorreia = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="otorreia">
                                    Otorreia
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="otite" 
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.queixas.otite = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="otite">
                                    Otite
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="tonturaVertigem" 
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.queixas.tonturaVertigem = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="tonturaVertigem">
                                    Tontura/vertigem
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="perfuracaoMembranaTimpanica" 
                                     value="SIM"
                                     onChange={e => this.props.anamnese.prontuario.queixas.perfuracaoMembranaTimpanica = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                                    Perfuração membrana timpânica
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="desconfortoSonsIntensos" 
                                    value="SIM"
                                    onChange={e => this.props.anamnese.prontuario.queixas.desconfortoSonsIntensos = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="desconfortoSonsIntensos">
                                    Desconforto sons intensos
                                </label>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
            </div>
        );
    }
}




export default Anamnese;