import { MDBInput, MDBInputGroup } from 'mdbreact';
import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import RadioButtonSimNao from './RadioButtonSimNao';


class Zumbindo extends React.Component{
    state = {
        
    }

    render(){
        return(
            <div >
                <Card title="Zumbido" className="mt-4">
                    <div className="row">
                        <div className="col">
                            <FormGroup className="" htmlForm="tipo" label="Tipo? ">
                                <div className="">
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "continuo"} 
                                            
                                            />
                                        <label className="form-check-label" htmlFor="continuo">
                                            continuo
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "pulsatil"} 
                                            
                                            />
                                        <label className="form-check-label" htmlFor="pulsatil">
                                            Pulsátil
                                        </label>
                                    </div>
                                            
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "subito"}
                                            
                                            />
                                        <label className="form-check-label" htmlFor="subito">
                                            Súbito
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={"vthis.props.name + ariavel"}
                                            
                                            />
                                        <label className="form-check-label" htmlFor="variavel">
                                            Variável
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={"ethis.props.name + mCrises"}
                                            
                                            />
                                        <label className="form-check-label" htmlFor="emCrises">
                                            Em crises
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup className="" htmlForm="comQparece" label="Com o que se parece:? ">
                                <div className="">
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={"panelathis.props.name + Pressao"}
                                            />
                                        <label className="form-check-label" htmlFor="panelaPressao">
                                            Panela de pressão
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "apito"}
                                            
                                            />
                                        <label className="form-check-label" htmlFor="apito">
                                            Apito
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "chiado"}
                                            
                                            />
                                        <label className="form-check-label" htmlFor="chiado">
                                            Chiado
                                        </label>
                                    </div>
                                            
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={"cathis.props.name + choeira"}
                                            
                                            />
                                        <label className="form-check-label" htmlFor="cachoeira">
                                            Cachoeira
                                        </label>
                                    </div>
                                   
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "abelha"}
                                            
                                            />
                                        <label className="form-check-label" htmlFor="abelha">
                                            Abelha
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "outros"}
                                            
                                            />
                                        <label className="form-check-label" htmlFor="outros">
                                            Outros
                                        </label>
                                    </div>
                                    {this.props.zumbido.outros ?
                                        (
                                            <MDBInputGroup
                                        material
                                        containerClassName="mb-2 mt-0"
                                        hint="Outras:"
                                        size="sm"
                                        onChange={e => this.props.zumbido.outrosInput = e.target.value}
                                    />
                                        ):(this.props.zumbido.outrosInput = "")
                                    }
                                </div>
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup className="" htmlForm="itensidade" label="Intensidade">
                                <div className="">
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "forte"} name={this.props.name + "itensidade"} value="1"
                                            
                                            />
                                        <label className="form-check-label" htmlFor="forte">
                                            Forte
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "fraco"} name={this.props.name + "itensidade"} value="2"/>
                                        <label className="form-check-label" htmlFor="fraco">
                                            Fraco
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "variavel"} name={this.props.name + "itensidade"}    value="3"                                     
                                            />
                                        <label className="form-check-label" htmlFor="variavel">
                                            Variável
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "moderado"} name={this.props.name + "itensidade"}    value="4"                                     
                                            />
                                        <label className="form-check-label" htmlFor="moderado">
                                            Moderado
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup className="" htmlForm="frequencia" label="Frequência? ">
                                <div className="">
                                    <div className="form-check mr-2">
                                        <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "constante"} value="1" />
                                            
                                        <label className="form-check-label" htmlFor={this.props.name + "constante"}>
                                            Constante
                                        </label>
                                    </div>
                                    <div className="form-check mr-2">
                                        <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "intermitente"} value="2" 
                                        />    
                                        <label className="form-check-label" htmlFor={this.props.name + "intermitente"}>
                                            Intermitente
                                        </label>
                                    </div>
                                    <div className="form-check mr-2">
                                        <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "esporadica"} value="3"
                                        />
                                        <label className="form-check-label" htmlFor={this.props.name + "esporadica"}>
                                            Esporadica
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <FormGroup className="" htmlForm="pitch" label="Pitch">
                                <div className="form-inline">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id={this.props.name + "agudo"} name={this.props.name + "pitch"} value="1"
                                            
                                            />
                                        <label className="form-check-label mr-2" htmlFor="agudo">
                                            Agudo
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id={this.props.name + "grave"} name={this.props.name + "pitch"}    value="2"                                     
                                            />
                                        <label className="form-check-label" htmlFor="grave">
                                            Grave
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup className="" htmlForm="DificuldadeDormirzumbindo" label="Dificuldade para dormir por causa do zumbido? ">
                                <RadioButtonSimNao className="ml-1" name={"DificuldadeDormirzumbindo"+this.props.name} id={this.props.name + "DificuldadeDormirzumbindo"} htmlForm="DificuldadeDormirzumbindo"
                                />
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup className="" htmlForm="algumTratamento" label="Já fez algum tratamento? ">
                                <RadioButtonSimNao className="ml-1" name={"algumTratamento"+this.props.name} id={this.props.name + "algumTratamento"} htmlForm="DificuldadeDormirzumbindo"
                                />
                            </FormGroup>
                        </div>
                    </div>
                   
                  
                    {this.props.zumbido.algumTratamento === "1" ?
                        (
                            <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint="Qual:"
                        size="sm"
                        
                    />
                        ):(this.props.zumbido.tratamentaQual = "")
                    }
                        <FormGroup label="Observações">
                            <MDBInput type="textarea" label="Descrava" outline size="lg" />
                        </FormGroup>
                </Card>
            </div>
        );
    }
}

export default Zumbindo;