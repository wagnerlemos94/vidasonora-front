import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamneseRadioButton from './AnamneseRadioButton';
import Aparelho from './Aparelho';
import RadioButtonSimNao from './RadioButtonSimNao';
import Tontura from './Tontuara';
import Zumbindo from './Zumbido';

class Queixas extends React.Component{

    state = {
        tontura:false,
        aparelho:false
    }

    tonturaAcoes = (e) =>{
        this.props.queixas.tonturaVertigem = e.target.checked;
        this.setState({tontura:e.target.checked});
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
                                <input className="form-check-input" type="checkbox" id="perfuracaoTimpanicaOD" 
                                    value="Perfuração timpânica"
                                    onChange={e => this.props.queixas.od.perfuracaoTimpanica = e.target.value}
                                    />
                                <input className="form-check-input ml-2" type="checkbox" id="perfuracaoTimpanicaOE" 
                                value="Perfuração timpânica"
                                onChange={e => this.props.queixas.oe.perfuracaoTimpanica = e.target.value}
                                />
                                <label className="form-check-label ml-4" htmlFor="perfuracaoTimpanica">
                                    Perfuração timpânica
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="otorreia" 
                                    value="Otorreia"
                                    onChange={e => this.props.queixas.od.otorreia = e.target.value}
                                />
                                <input className="form-check-input ml-2" type="checkbox" id="otorreia" 
                                    value="Otorreia"
                                    onChange={e => this.props.queixas.oe.otorreia = e.target.value}
                                />
                                <label className="form-check-label ml-4" htmlFor="otorreia">
                                    Otorreia
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="prurido"
                                    value="Prurido"
                                    onChange={e => this.props.queixas.od.prurido = e.target.value}
                                />
                                <input className="form-check-input ml-2" type="checkbox" id="prurido" 
                                    value="Prurido"
                                    onChange={e => this.props.queixas.oe.prurido = e.target.value}
                                />
                                <label className="form-check-label ml-4" htmlFor="prurido">
                                    Prurido
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="otite" 
                                    value="Otite"
                                    onChange={e => this.props.queixas.od.otite = e.target.value}
                                />
                                <input className="form-check-input ml-2" type="checkbox" id="otite" 
                                    value="Otite"
                                    onChange={e => this.props.queixas.oe.otite = e.target.value}
                                />
                                <label className="form-check-label ml-4" htmlFor="otite">
                                    Otite
                                </label>
                            </div>
                        </div>
                        <div className="col mt-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="plenitudeAuricular" 
                                    value="Plenitude Auricular"
                                    onChange={e => this.props.queixas.plenitudeAuricular = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="plenitudeAuricular">
                                    Plenitude auricular
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                value="Tontura e Vertigem"
                                onChange={e => 
                                    this.setState(
                                        {...this.props.queixas.tonturaVertigem = e.target.value},
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
                                    value="Zumbido"
                                  onChange={e => this.setState(
                                        {...this.props.queixas.zumbido = e.target.value},
                                        this.props.exibirOcutar("btnZumbido",e.target.checked)
                                    )
                                }
                                />
                                <label className="form-check-label" htmlFor="zumbido">
                                    Zumbido
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="aparelhoAuditivo" 
                                    value="Aparelho Auditivo"
                                    onChange={e => this.setState(
                                        {...this.props.queixas.aparelhoAuditivo = e.target.value},
                                        this.props.exibirOcutar("btnAparelhoAuditivo",e.target.checked)
                                    )
                                }
                                />
                                <label className="form-check-label" htmlFor="aparelhoAuditivo">
                                    Já usou aparelho auditivo?
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            
        );
    }
}

export default Queixas;