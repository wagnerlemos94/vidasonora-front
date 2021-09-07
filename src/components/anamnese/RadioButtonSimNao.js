import React from 'react';


class RadioButtonSimNao extends React.Component{
    constructor(){
        super();
    }

    state = {
        radio1:null,
        radio2:null
    }

    componentDidMount(){
        const valor = this.props.valorChekbox;
        if(valor === "1"){
            this.setState({radio1:true});
            console.log(valor);
        }else if(valor === "2"){
            this.setState({radio2:true});            
            console.log(valor);
        }
    }

    render(){
        return(
            <div className={"row " +this.props.className}>
                <div className="form-check mr-2">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                        checked={this.state.radio1} onChange={this.props.onChange}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Sim
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'2'} value="2" 
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