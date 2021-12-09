import React from 'react';


class AnamnesePacRadioButton extends React.Component{
    constructor(){
        super();
    }

    state = {
        radio1:null,
        radio2:null,
        radio3:null,
        radio1:null,
        radio4:null,
        radio5:null,
    }

    render(){
        return(
            <div className={this.props.className}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="Não" 
                        checked={this.state.radio1} onChange={this.props.onChange}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Não
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'2'} value="Menos de 1 ano" 
                        checked={this.state.radio2} onChange={this.props.onChange}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Menos de 1 ano
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'3'} value="Entre 1 e 3 anos" 
                        checked={this.state.radio3} onChange={this.props.onChange}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Entre 1 e 3 anos
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'4'} value="Entre 3 e 5 anos" 
                        checked={this.state.radio4} onChange={this.props.onChange}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Entre 3 e 5 anos
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'5'} value="Acima 5 anos"
                        checked={this.state.radio5} onChange={this.props.onChange}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Acima 5 anos
                    </label>
                </div>
            </div>
        );
    }
}

export default AnamnesePacRadioButton;