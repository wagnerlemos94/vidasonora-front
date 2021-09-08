import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';



class Tontura extends React.Component{
    render(){
        return(
            <Card title="Anamnese Tontura">
                <FormGroup label="Inicío: ">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Súbita
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Constante
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Em crises
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Intensidade: ">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Leve
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Moderada
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Intensa
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Variável
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Estabilizada
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Aumentando
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Diminuindo
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Intensidade: ">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Pouco frequente
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Frequente
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Muito frequente
                            </label>
                        </div>
                    </div>
                </FormGroup>
            </Card>
        );
    }
}

export default Tontura;