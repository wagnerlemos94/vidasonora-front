import React from 'react';
import Card from '../Card';
import { MDBInputGroup } from "mdbreact";


class MaiorDificuldadesAuditivas extends React.Component{
    state = {
        
    }

    render(){
        return(
            <Card title="Maiores Dificuldades Auditivas">
                 <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="telefone" 
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.telefone = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="telefone">
                        Telefone
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="conversacao" 
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.conversacao = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="conversacao">
                        Conversação
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="radioMusica" 
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.radioMusica = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="radioMusica">
                        Rádio/Música
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="televisao" 
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.televisao = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="televisao">
                        Televisão
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="vozMasculina"
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.vozMasculina = e.target.checked
                            })}
                        />
                    <label className="form-check-label" htmlFor="vozMasculina">
                        Voz Masculina
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="vozFeminina"
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.vozFeminina = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="vozFeminina">
                        Voz Feminina
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="localizacaoFonteSonora"
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.localizacaoFonteSonora = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="localizacaoFonteSonora">
                        Localização da fonte sonora
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="palestrasCultoEtc"
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.palestrasCultoEtc = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="palestrasCultoEtc">
                        Palestras, Culto, Etc
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="trabalho "
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.trabalho  = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="trabalho ">
                        No Trabalho
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="reunioes"
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.reunioes = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="reunioes">
                        Reuniões
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="almocoFamilia "
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.almocoFamilia  = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="almocoFamilia ">
                        Almoço em Família 
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="vozFeminina"
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.vozFeminina = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="vozFeminina">
                        Voz Feminina
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="outras"
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.outras = e.target.checked
                            })}
                    />
                    <label className="form-check-label" htmlFor="outras">
                        Outras
                    </label>
                </div>
                {this.props.queixas.aparelho.outras ?
                    (
                        <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint="Outras:"
                        size="sm"
                        onChange={e => 
                            this.setState({
                                ...this.props.queixas.aparelho.outrasInput = e.target.value
                            })}
                        />
                    ):(e => this.setState({
                        ...this.props.queixas.aparelho.outrasInput = ""
                    }))
                }
            </Card>
        );
    }
}

export default MaiorDificuldadesAuditivas;