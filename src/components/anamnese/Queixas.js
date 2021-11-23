import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamneseRadioButton from './AnamneseRadioButton';
import Aparelho from './Aparelho';
import RadioButtonSimNao from './RadioButtonSimNao';
import Tontura from './Tontuara';
import Zumbindo from './Zumbindo';

class Queixas extends React.Component{

    state = {
        tontura:false,
        css:"col mt-4",
        aparelho:false
    }

    tonturaAcoes = (e) =>{
        this.props.queixas.tonturaVertigem = e.target.checked;
        this.setState({tontura:e.target.checked});
        if(e.target.checked){
            this.setState({css:"mt-4"});
        }else{
            this.setState({css:"col mt-4"});
        }
    }

    aparelhoAcoes = (e) =>{
        
    }

    render(){
        return(
            <Card title="Queixas Auditivas">
                <div className="mb-4"> 
                    <div className="row">
                        <div className="col">
                            <span>OD</span> <span>OE</span>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanicaOD" 
                                    onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                                    />
                                <input className="form-check-input ml-2" type="checkbox" id="perfuracaoMembranaTimpanicaOE" 
                                onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                                />
                                <label className="form-check-label ml-4" htmlFor="perfuracaoMembranaTimpanica">
                                    Perfuração timpânica
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="otorreia" 
                                    onChange={e => this.props.queixas.otorreia = e.target.checked}
                                />
                                <input className="form-check-input ml-2" type="checkbox" id="otorreia" 
                                    onChange={e => this.props.queixas.otorreia = e.target.checked}
                                />
                                <label className="form-check-label ml-4" htmlFor="otorreia">
                                    Otorreia
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="prurido"
                                    onChange={e => this.props.queixas.prurido = e.target.checked}
                                />
                                <input className="form-check-input ml-2" type="checkbox" id="prurido" 
                                    onChange={e => this.props.queixas.prurido = e.target.checked}
                                />
                                <label className="form-check-label ml-4" htmlFor="prurido">
                                    Prurido
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="otite" 
                                    onChange={e => this.props.queixas.otite = e.target.checked}
                                />
                                <input className="form-check-input ml-2" type="checkbox" id="otite" 
                                    onChange={e => this.props.queixas.otite = e.target.checked}
                                />
                                <label className="form-check-label ml-4" htmlFor="otite">
                                    Otite
                                </label>
                            </div>
                        </div>
                        <div className="col mt-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="plenitudeAuricular" 
                                    onChange={e => this.props.queixas.plenitudeAuricular = e.target.checked}
                                />
                                <label className="form-check-label" htmlFor="plenitudeAuricular">
                                    Plenitude auricular
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                onChange={e => 
                                    this.setState(
                                        {...this.props.queixas.tonturaVertigem = e.target.checked},
                                        this.props.exibirOcutar("btnTontura",e.target.checked)
                                    )
                                }
                                />
                                <label className="form-check-label" htmlFor="tonturaVertigem">
                                    Tontura/vertigem
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="zumbido" 
                                  onChange={e => this.setState(
                                        {...this.props.queixas.Zumbindo = e.target.checked},
                                        this.props.exibirOcutar("btnZumbido",e.target.checked)
                                    )
                                }
                                />
                                <label className="form-check-label" htmlFor="tonturaVertigem">
                                    Zumbindo
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="aparelhoAuditivo" 
                                    onChange={e => this.setState(
                                        {...this.props.queixas.aparelhoAuditivo = e.target.checked},
                                        this.props.exibirOcutar("btnAparelhoAuditivo",e.target.checked)
                                    )
                                }
                                />
                                <label className="form-check-label" htmlFor="tonturaVertigem">
                                    Já usou aparelho auditivo?
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.queixas.usouAparelhoAudio === "1" ? (
                    <Aparelho queixas={this.props.queixas} name={this.props.name}/>
                ):(false)
                }
                {this.state.tontura ? (
                    <Tontura queixas={this.props.queixas}/>
                ):(false)
                }
            </Card>
            
        );
    }
}

export default Queixas;