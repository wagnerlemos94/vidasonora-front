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

    componentDidMount(){
        const valor = this.props.valorChekbox;
        if(valor === "1"){
            this.setState({radio1:true});
            console.log(valor);
        }else if(valor === "2"){
            this.setState({radio2:true});            
            console.log(valor);
        }else if(valor === "3"){
            this.setState({radio3:true});            
            console.log(valor);
        }else if(valor === "4"){
            this.setState({radio4:true});            
            console.log(valor);
        }else if(valor === "5"){
            this.setState({radio5:true});
            console.log(valor);
        }
    }

    render(){
        return(
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1"  checked={this.state.radio1}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Não
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'2'} value="2" checked={this.state.radio2}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Menos de 1 ano
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'3'} value="3" checked={this.state.radio3}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Entre 1 e 3 anos
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'4'} value="4" checked={this.state.radio4}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Entre 3 e 5 anos
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'5'} value="5"checked={this.state.radio5}/>
                    <label className="form-check-label" htmlFor={this.props.name}>
                        Acima 5 anos
                    </label>
                </div>
            </div>
        );
    }
}

export default AnamnesePacRadioButton;