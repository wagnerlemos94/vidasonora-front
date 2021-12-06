import React from 'react';


class RadioButtonSimNao extends React.Component{
    constructor(){
        super();
    }

    state = {
        radio1:null,
        radio2:null
    }

    render(){
        return(
            <div className={"row " +this.props.className}>
                <div className="form-check mr-2">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="Sim" 
                        checked={this.state.radio1} onChange={this.props.onChange}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Sim
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'2'} value="Não" 
                        checked={this.state.radio2} onChange={this.props.onChange}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Não
                   </label>
                </div>
            </div>
        );
    }
}

export default RadioButtonSimNao;