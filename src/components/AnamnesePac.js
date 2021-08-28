import React from 'react';
import Card from './Card';
import FormGroup from './FormGroup';

class AnamnesePac extends React.Component{

    constructor(){
        super();
    }

    state = {
        titulo:"Anamnese PAC",
        prontuario:{
            nomeMedico:"",
            preferenciaManual:"",
            escolaridade:""
        }
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                <FormGroup htmlForm="nomeMedico" label="Encaminhado por :">
                    <input type="text" className="form-control" placeholder="Ex: Dr. Daniel"
                        value={this.state.prontuario.nomeMedico}
                       onChange={e => this.setState({prontuario:{
                            ...this.state.prontuario,
                            nomeMedico: e.target.value
                        }})}
                        required
                    />
                </FormGroup>
                <div className="row">
                    <div className="col">
                        <FormGroup htmlForm="preferenciaManual" label="Preferência manual :">
                            <select className="form-control" 
                                onChange={e => this.setState({prontuario:{
                                    ...this.state.prontuario,
                                    preferenciaManual: e.target.value
                                }})}
                                required
                            >
                                <option value="" disabled selected>Selecione...</option>
                                <option value="DESTRA">DESTRA</option>
                                <option value="CANHOTA">CANHOTA</option>
                            </select>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup htmlForm="escolaridade" label="Escolaridade :">
                            <input type="text" className="form-control" placeholder="Ex: Superior Completo"
                                value={this.state.prontuario.escolaridade}
                                onChange={e => this.setState({prontuario:{
                                    ...this.state.prontuario,
                                    escolaridade: e.target.value
                                }})}
                                required
                                />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Card title="Queixas:">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">
                                    Default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">
                                    Default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">
                                    Default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">
                                    Default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">
                                    Default radio
                                </label>
                            </div>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card title="Queixas:">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="prurido" />
                                <label class="form-check-label" for="prurido">
                                    Prurido
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="otorreia" />
                                <label class="form-check-label" for="otorreia">
                                    Otorreia
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="otite" />
                                <label class="form-check-label" for="otite">
                                    Otite
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="tonturaVertigem" />
                                <label class="form-check-label" for="tonturaVertigem">
                                    Tontura/vertigem
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="perfuracaoMembranaTimpanica" />
                                <label class="form-check-label" for="perfuracaoMembranaTimpanica">
                                    Perfuração membrana timpânica
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="desconfortoSonsIntensos" />
                                <label class="form-check-label" for="desconfortoSonsIntensos">
                                    Desconforto sons intensos
                                </label>
                            </div>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card title="Queixas:">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="prurido" />
                                <label class="form-check-label" for="prurido">
                                    Prurido
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="otorreia" />
                                <label class="form-check-label" for="otorreia">
                                    Otorreia
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="otite" />
                                <label class="form-check-label" for="otite">
                                    Otite
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="tonturaVertigem" />
                                <label class="form-check-label" for="tonturaVertigem">
                                    Tontura/vertigem
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="perfuracaoMembranaTimpanica" />
                                <label class="form-check-label" for="perfuracaoMembranaTimpanica">
                                    Perfuração membrana timpânica
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="desconfortoSonsIntensos" />
                                <label class="form-check-label" for="desconfortoSonsIntensos">
                                    Desconforto sons intensos
                                </label>
                            </div>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card title="Comobirdades">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="hipertensao" />
                                <label class="form-check-label" for="hipertensao">
                                    Hipertensão
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="diabetes" />
                                <label class="form-check-label" for="diabetes">
                                    Diabetes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="colesterolAlto" />
                                <label class="form-check-label" for="colesterolAlto">
                                    Colesterol alto
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="doencasHormonais" />
                                <label class="form-check-label" for="doencasHormonais">
                                    Doenças hormonais
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="doencasMetabolicas" />
                                <label class="form-check-label" for="doencasMetabolicas">
                                    Doenças metabólicas
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="doencasInfecciosas" />
                                <label class="form-check-label" for="doencasInfecciosas">
                                    Doenças infecciosas
                                </label>
                            </div>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card title="Queixas:">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="prurido" />
                                <label class="form-check-label" for="prurido">
                                    Prurido
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="otorreia" />
                                <label class="form-check-label" for="otorreia">
                                    Otorreia
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="otite" />
                                <label class="form-check-label" for="otite">
                                    Otite
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="tonturaVertigem" />
                                <label class="form-check-label" for="tonturaVertigem">
                                    Tontura/vertigem
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="perfuracaoMembranaTimpanica" />
                                <label class="form-check-label" for="perfuracaoMembranaTimpanica">
                                    Perfuração membrana timpânica
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="desconfortoSonsIntensos" />
                                <label class="form-check-label" for="desconfortoSonsIntensos">
                                    Desconforto sons intensos
                                </label>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
        );
    }
}


export default AnamnesePac;