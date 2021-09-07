import React from 'react';
import Card from '../Card';
import { MDBInputGroup } from "mdbreact";


class Comobirdades extends React.Component{
    state = {
        comborbidadesOutras:true
    }

    render(){
        return(
            <Card title="Comobirdades">
                 <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="doencasMetabolicas" 
                        onChange={e => this.props.comorbidades.doencasMetabolicas = e.target.checked}
                    />
                    <label className="form-check-label" htmlFor="doencasMetabolicas">
                        Doenças metabólicas
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="doencasInfecciosas" 
                        onChange={e => this.props.comorbidades.doencasInfecciosas = e.target.checked}
                    />
                    <label className="form-check-label" htmlFor="doencasInfecciosas">
                        Doenças infecciosas
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="doencasHormonais" 
                        onChange={e => this.props.comorbidades.doencasHormonais = e.target.checked}
                    />
                    <label className="form-check-label" htmlFor="doencasHormonais">
                        Doenças hormonais
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="colesterolAlto" 
                        onChange={e => this.props.comorbidades.colesterolAlto = e.target.checked}
                    />
                    <label className="form-check-label" htmlFor="colesterolAlto">
                        Colesterol alto
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="hipertensao"
                        onChange={e => this.props.comorbidades.hipertensao = e.target.checked}
                        />
                    <label className="form-check-label" htmlFor="hipertensao">
                        Hipertensão
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="diabetes"
                        onChange={e => this.props.comorbidades.diabetes = e.target.checked}
                    />
                    <label className="form-check-label" htmlFor="diabetes">
                        Diabetes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="outras" 
                        onChange={
                            e => (this.props.comorbidades.outras = e.target.checked,
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
                    containerClassName="mb-2 mt-0"
                    hint="Outras:"
                    size="sm"
                    onChange={e => this.props.comorbidades.inputOutras = e.target.value}
                />
                    ):(this.props.comorbidades.inputOutras = "")
                }
            </Card>
        );
    }
}

export default Comobirdades;