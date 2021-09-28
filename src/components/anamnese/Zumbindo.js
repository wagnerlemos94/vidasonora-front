import { MDBInput, MDBInputGroup } from 'mdbreact';
import React from 'react';
import FormGroup from '../FormGroup';
import RadioButtonSimNao from './RadioButtonSimNao';


class Zumbindo extends React.Component{
    state = {
        
    }

    render(){
        return(
            <div>
                <FormGroup className="row mb-1" htmlForm="zumbindo" label="Zumbindo? ">
                    <RadioButtonSimNao className="ml-3" name={"zumbindo"+this.props.name} id={this.props.name + "zumbindo"} htmlForm="zumbindo"
                        onChange={e => 
                        this.setState({
                            ...this.props.zumbido.option = e.target.value
                        })
                        }/>
                </FormGroup>
                {this.props.zumbido.option === "1" ?(
                    <div className="row">
                        <div className="col">
                            <FormGroup className="" htmlForm="tipo" label="Tipo? ">
                                <div className="form-inline">
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "continuo"} 
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.continuo = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="continuo">
                                            continuo
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "pulsatil"} 
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.pulsatil = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="pulsatil">
                                            Pulsátil
                                        </label>
                                    </div>
                                            
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "subito"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.subito = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="subito">
                                            Súbito
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={"vthis.props.name + ariavel"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.variavel = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="variavel">
                                            Variável
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={"ethis.props.name + mCrises"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.emCrises = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="emCrises">
                                            Em crises
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup className="" htmlForm="frequencia" label="Frequência? ">
                                <div className="form-inline">
                                    <div className="form-check mr-2">
                                        <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "constante"} value="1" 
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.frequencia = e.target.value
                                                })
                                            }/>
                                        <label className="form-check-label" htmlFor={this.props.name + "constante"}>
                                            Constante
                                        </label>
                                    </div>
                                    <div className="form-check mr-2">
                                        <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "intermitente"} value="2" 
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.frequencia = e.target.value
                                                })
                                            }/>
                                        <label className="form-check-label" htmlFor={this.props.name + "intermitente"}>
                                            Intermitente
                                        </label>
                                    </div>
                                    <div className="form-check mr-2">
                                        <input className="form-check-input" type="radio" name={this.props.name + "frequencia"} id={this.props.name + "esporadica"} value="3"
                                        onChange={ e => 
                                            this.setState({
                                                ...this.props.zumbido.frequencia = e.target.value
                                            })
                                        }/>
                                        <label className="form-check-label" htmlFor={this.props.name + "esporadica"}>
                                            Esporadica
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup className="" htmlForm="comQparece" label="Com o que se parece:? ">
                                <div className="form-inline">
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "apito"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.apito = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="apito">
                                            Apito
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "chiado"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.chiado = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="chiado">
                                            Chiado
                                        </label>
                                    </div>
                                            
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={"cathis.props.name + choeira"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.cachoeira = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="cachoeira">
                                            Cachoeira
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={"panelathis.props.name + Pressao"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.panelaPressao = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="panelaPressao">
                                            Panela de pressão
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "abelha"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.abelha = e.target.checked
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="abelha">
                                            Abelha
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="checkbox" id={this.props.name + "outros"}
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.outros = e.target.checked
                                                })
                                                }
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
                            <FormGroup className="form-inline" htmlForm="pitch" label="Pitch">
                                <div className="form-inline">
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "agudo"} name={this.props.name + "pitch"} value="1"
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.pitch = e.target.value
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="agudo">
                                            Agudo
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "grave"} name={this.props.name + "pitch"}    value="2"                                     onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.pitch = e.target.value
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="grave">
                                            Grave
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup className="form-inline" htmlForm="itensidade" label="Intensidade">
                                <div className="form-inline">
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "forte"} name={this.props.name + "itensidade"} value="1"
                                            onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.itensidade = e.target.value
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="forte">
                                            Forte
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "fraco"} name={this.props.name + "itensidade"}    value="2"                                     onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.itensidade = e.target.value
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="fraco">
                                            Fraco
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "variavel"} name={this.props.name + "itensidade"}    value="3"                                     onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.itensidade = e.target.value
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="variavel">
                                            Variável
                                        </label>
                                    </div>
                                    <div className="form-check ml-2">
                                        <input className="form-check-input" type="radio" id={this.props.name + "moderado"} name={this.props.name + "itensidade"}    value="4"                                     onChange={ e => 
                                                this.setState({
                                                    ...this.props.zumbido.itensidade = e.target.value
                                                })
                                                }
                                            />
                                        <label className="form-check-label" htmlFor="moderado">
                                            Moderado
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup className="" htmlForm="DificuldadeDormirzumbindo" label="Dificuldade para dormir por causa do zumbido? ">
                                <RadioButtonSimNao className="ml-3" name={"DificuldadeDormirzumbindo"+this.props.name} id={this.props.name + "DificuldadeDormirzumbindo"} htmlForm="DificuldadeDormirzumbindo"
                                    onChange={e => 
                                    this.setState({
                                        ...this.props.zumbido.DificuldadeDormirzumbindo = e.target.value
                                    })
                                    }/>
                            </FormGroup>
                            <FormGroup className="" htmlForm="algumTratamento" label="Já fez algum tratamento? ">
                                <RadioButtonSimNao className="ml-3" name={"algumTratamento"+this.props.name} id={this.props.name + "algumTratamento"} htmlForm="DificuldadeDormirzumbindo"
                                    onChange={e => 
                                    this.setState({
                                        ...this.props.zumbido.algumTratamento = e.target.value
                                    })
                                }/>
                            </FormGroup>
                            {this.props.zumbido.algumTratamento === "1" ?
                                (
                                    <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Qual:"
                                size="sm"
                                onChange={e => this.props.zumbido.tratamentaQual = e.target.value}
                            />
                                ):(this.props.zumbido.tratamentaQual = "")
                            }
                                <FormGroup label="Observações">
                                    <MDBInput type="textarea" label="Descrava" outline size="lg" />
                                </FormGroup>
                        </div>
                    </div>
                ):(false)

                }
            </div>
        );
    }
}

export default Zumbindo;