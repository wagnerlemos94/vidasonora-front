import { MDBInput, MDBInputGroup } from 'mdbreact';
import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import RadioButtonSimNao from './RadioButtonSimNao';


class Zumbido extends React.Component{
    state = {
        
    }

    render(){
        return(
            <div >
                <Card title="Zumbido" className="mt-4">
                    <div className="row">
                        <div className="col">
                            <h5>Tipo:</h5>
                            <div className="">
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "continuo"} 
                                        value="continuo"
                                        onChange={e => this.setState({
                                            ...this.props.zumbido.tipo.continuo  = e.target.value
                                        })}
                                        />
                                    <label className="form-check-label" htmlFor="continuo">
                                        continuo
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "pulsatil"} 
                                            value="pulsatil"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.tipo.pulsatil  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="pulsatil">
                                        Pulsátil
                                    </label>
                                </div>
                                        
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "subito"}
                                            value="subito"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.tipo.subito  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="subito">
                                        Súbito
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "variavel"}
                                            value="variavel"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.tipo.variavel  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="variavel">
                                        Variável
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "emCrises"}
                                            value="emCrises"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.tipo.emCrises  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="emCrises">
                                        Em crises
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h5>Com o que se parece:</h5>
                            <div className="">
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "panelaPressao"}
                                            value="panelaPressao"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.comQueParece.panelaPressao  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="panelaPressao">
                                        Panela de pressão
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "apito"}
                                            value="apito"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.comQueParece.apito  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="apito">
                                        Apito
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "chiado"}
                                            value="chiado"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.comQueParece.chiado  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="chiado">
                                        Chiado
                                    </label>
                                </div>
                                        
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "cachoeira"}
                                            value="cachoeira"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.comQueParece.cachoeira  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="cachoeira">
                                        Cachoeira
                                    </label>
                                </div>
                                
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "abelha"}
                                            value="abelha"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.comQueParece.abelha  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="abelha">
                                        Abelha
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="checkbox" id={this.props.name + "outros"}
                                            value="outros"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.comQueParece.outros  = e.target.value
                                            })}
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
                        </div>
                        <div className="col">
                            <h5>Intensidade:</h5>
                            <div className="">
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="radio" id={this.props.name + "forte"} name={this.props.name + "itensidade"}
                                            value="forte"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.intensidade  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="forte">
                                        Forte
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="radio" id={this.props.name + "fraco"} name={this.props.name + "itensidade"}
                                        value="fraco"
                                        onChange={e => this.setState({
                                            ...this.props.zumbido.intensidade  = e.target.value
                                        })}
                                    />
                                    <label className="form-check-label" htmlFor="fraco">
                                        Fraco
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="radio" id={this.props.name + "variavel"} name={this.props.name + "itensidade"}
                                            value="variavel"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.intensidade  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="variavel">
                                        Variável
                                    </label>
                                </div>
                                <div className="form-check ml-2">
                                    <input className="form-check-input" type="radio" id={this.props.name + "moderado"} name={this.props.name + "itensidade"}
                                            value="moderado"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.intensidade  = e.target.value
                                            })}
                                        />
                                    <label className="form-check-label" htmlFor="moderado">
                                        Moderado
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h5>Frequência:</h5>
                            <div className="form-check mr-2">
                                <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "constante"} 
                                    value="constante"
                                    onChange={e => this.setState({
                                        ...this.props.zumbido.frequencia  = e.target.value
                                    })}
                                />
                                    
                                <label className="form-check-label" htmlFor={this.props.name + "constante"}>
                                    Constante
                                </label>
                            </div>
                            <div className="form-check mr-2">
                                <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "intermitente"}
                                    value="intermitente"
                                    onChange={e => this.setState({
                                        ...this.props.zumbido.frequencia  = e.target.value
                                    })}
                                />    
                                <label className="form-check-label" htmlFor={this.props.name + "intermitente"}>
                                    Intermitente
                                </label>
                            </div>
                            <div className="form-check mr-2">
                                <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "esporadica"}
                                    value="esporadica"
                                    onChange={e => this.setState({
                                        ...this.props.zumbido.frequencia  = e.target.value
                                    })}
                                />
                                <label className="form-check-label" htmlFor={this.props.name + "esporadica"}>
                                    Esporadica
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>Pitch:</h5>
                            <div className="form-inline">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id={this.props.name + "agudo"} name={this.props.name + "pitch"} 
                                            value="agudo"
                                            onChange={e => this.setState({
                                                ...this.props.zumbido.pitch  = e.target.value
                                            })}                                            
                                        />
                                    <label className="form-check-label mr-2" htmlFor="agudo">
                                        Agudo
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id={this.props.name + "grave"} name={this.props.name + "pitch"} 
                                        value="grave"
                                        onChange={e => this.setState({
                                            ...this.props.zumbido.pitch  = e.target.value
                                        })}
                                        />
                                    <label className="form-check-label" htmlFor="grave">
                                        Grave
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h6>Dificuldade para dormir por causa do zumbido:</h6>
                            <RadioButtonSimNao className="ml-1" name={"dificuldadeDormir"+this.props.name} id={this.props.name + "dificuldadeDormirzumbido"} htmlForm="dificuldadeDormirzumbido"
                                    onChange={e => this.setState({
                                    ...this.props.zumbido.dificuldadeDormir  = e.target.value
                                })}
                            />
                        </div>
                        <div className="col">
                            <h5>Já fez algum tratamento:</h5>
                            <RadioButtonSimNao className="ml-1" name={"algumTratamento"+this.props.name} id={this.props.name + "algumTratamento"} htmlForm="algumTratamento"
                                onChange={e => this.setState({
                                ...this.props.zumbido.algumTratamento  = e.target.value
                            })}
                            />
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
                    <h5 className="mt-4">Observações:</h5>
                    <MDBInput type="textarea" label="Descrava" outline size="lg"
                            onChange={e => this.setState({
                            ...this.props.zumbido.observacao  = e.target.value
                        })}
                    />
                    
                </Card>
            </div>
        );
    }
}

export default Zumbido;