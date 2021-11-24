import React from 'react';
import Card from '../Card';
import { MDBInputGroup } from "mdbreact";
import FormGroup from '../FormGroup';


class MaiorDificuldadesAuditivas extends React.Component{
    state = {
        
    }

    render(){
        return(
            <Card title="Maiores dificuldades Auditivas">
                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="telefone" value="Telefone"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.telefone = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="telefone">
                                Telefone
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="conversacao" value="Conversação"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.conversacao = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="conversacao">
                                Conversação
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="radioMusica" value="Rádio/Música"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.radioMusica = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="radioMusica">
                                Rádio/Música
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="televisao" value="Televisão"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.televisao = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="televisao">
                                Televisão
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="vozMasculina" value="Voz Masculina"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.vozMasculina = e.target.value
                                    })}
                                />
                            <label className="form-check-label" htmlFor="vozMasculina">
                                Voz Masculina
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="vozFeminina" value="Voz Feminina"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.vozFeminina = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="vozFeminina">
                                Voz Feminina
                            </label>
                        </div>                    
                    
                    </div>
                
                    <div className="col">    
                       
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="localizacaoFonteSonora" value="Localização da fonte sonora"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.localizacaoFonteSonora = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="localizacaoFonteSonora">
                                Localização da fonte sonora
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="palestrasCultoEtc" value="Palestras, Culto, Etc"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.palestrasCultoEtc = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="palestrasCultoEtc">
                                Palestras, Culto, Etc
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="trabalho" value="No Trabalho"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.trabalho  = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="trabalho ">
                                No Trabalho
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="reunioes" value="Reuniões"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.reunioes = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="reunioes">
                                Reuniões
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="almocoFamilia" value="Almoço em Família"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.almocoFamilia  = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="almocoFamilia">
                                Almoço em Família
                            </label>
                        </div>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="outras" value="Outras"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.outras = e.target.value
                                    })}
                            />
                            <label className="form-check-label" htmlFor="outras">
                                Outras
                            </label>
                        </div>
                        {this.props.aparelho.outras === "Outras" ?
                            (
                                <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Outras:"
                                size="sm"
                                onChange={e => 
                                    this.setState({
                                        ...this.props.aparelho.outrasDescricao = e.target.value
                                    })}
                                />
                            ):(e => this.setState({
                                ...this.props.aparelho.outrasDescricao = ""
                            }))
                        }
                    </div>
                </div>
            </Card>
        );
    }
}

export default MaiorDificuldadesAuditivas;