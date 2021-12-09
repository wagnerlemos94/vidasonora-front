import React from 'react';
import Card from '../Card';
import { MDBInputGroup } from "mdbreact";


class Comobirdades extends React.Component{
    state = {
        comborbidadesOutras:true
    }

    render(){
        return(
            <Card title="Comobirdades" className="pb-5">
                <div className="row">
                    <div className="col">                        
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="doencasMetabolicas" 
                                value="doenças Metábolicas"
                                onChange={e => this.props.comorbidades.doencasMetabolicas = e.target.value}
                            />
                            <label className="form-check-label" htmlFor="doencasMetabolicas">
                                Doenças metabólicas
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="doencasHormonais" 
                                value="Doenças Hormonais"
                                onChange={e => this.props.comorbidades.doencasHormonais = e.target.value}
                            />
                            <label className="form-check-label" htmlFor="doencasHormonais">
                                Doenças hormonais
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="hipertensao"
                                value="Hipertensão"
                                onChange={e => this.props.comorbidades.hipertensao = e.target.value}
                                />
                            <label className="form-check-label" htmlFor="hipertensao">
                                Hipertensão
                            </label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="doencasInfecciosas" 
                                value="Doenças Infecciosas"
                                onChange={e => this.props.comorbidades.doencasInfecciosas = e.target.value}
                            />
                            <label className="form-check-label" htmlFor="doencasInfecciosas">
                                Doenças infecciosas
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="colesterolAlto" 
                                value="Colesterol Alto"
                                onChange={e => this.props.comorbidades.colesterolAlto = e.target.value}
                            />
                            <label className="form-check-label" htmlFor="colesterolAlto">
                                Colesterol alto
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="diabetes"
                                value="Diabetes"
                                onChange={e => this.props.comorbidades.diabetes = e.target.value}
                            />
                            <label className="form-check-label" htmlFor="diabetes">
                                Diabetes
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="outras" 
                        value="outras"
                        onChange={
                            e => (this.props.comorbidades.outras = e.target.value,
                                this.setState({comborbidadesOutras:!e.target.checked})  
                                )
                        }
                    />
                    <label className="form-check-label" htmlFor="outras">
                        outras
                    </label>
                </div>
                {!this.state.comborbidadesOutras ?
                    (
                        <MDBInputGroup
                    material
                    containerClassName="mb-2"
                    hint="Outras:"
                    size="sm"
                    onChange={e => this.props.comorbidades.inputOutras = e.target.value}
                />
                    ):(this.props.comorbidades.inputOutras = "")
                }
                {this.props.children}
                
            </Card>
        );
    }
}

export default Comobirdades;