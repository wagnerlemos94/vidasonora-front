import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import Aparelho from './Aparelho';
import RadioButtonSimNao from './RadioButtonSimNao';
import Tontura from './Tontuara';

class Queixas extends React.Component{

    state = {
        tontura:false,
        css:"col mt-4",
        aparelho:false
    }

    tonturaAcoes = (e) =>{
        this.props.queixas.tonturaVertigem = e.target.checked;
        this.setState({tontura:e.target.checked});
        if(e.target.checked){
            this.setState({css:"mt-4"});
        }else{
            this.setState({css:"col mt-4"});
        }
    }

    aparelhoAcoes = (e) =>{
        
    }

    render(){
        return(
            <div className={this.state.css}>
                <Card title={this.props.titulo}>
                    <div className="mb-4"> 
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                                onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                                Perfuração membrana timpânica
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="plenitudeAuricular" 
                                onChange={e => this.props.queixas.plenitudeAuricular = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="plenitudeAuricular">
                                Plenitude auricular
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                onChange={
                                    e => this.tonturaAcoes(e)
                                    }
                            />
                            <label className="form-check-label" htmlFor="tonturaVertigem">
                                Tontura/vertigem
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="otorreia" 
                                onChange={e => this.props.queixas.otorreia = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="otorreia">
                                Otorreia
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="prurido"
                                onChange={e => this.props.queixas.prurido = e.target.checked}
                            />
                            {this.state.tontura}
                            <label className="form-check-label" htmlFor="prurido">
                                Prurido
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="otite" 
                                onChange={e => this.props.queixas.otite = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="otite">
                                Otite
                            </label>
                        </div>
                        <div className="col">
                            <FormGroup className="row mb-1" htmlForm="usouAprarelhoAudio" label="Já usou aparelho auditivo? ">
                                <RadioButtonSimNao className="ml-3" name={"usouAprarelhoAudio"+this.props.name} id="usouAprarelhoAudio" htmlForm="usouAprarelhoAudio"
                                 onChange={e => 
                                    this.setState({
                                        ...this.props.queixas.usouAparelhoAudio = e.target.value
                                    })
                                    }/>
                            </FormGroup>
                        </div>
                    </div>
                </Card>
                    {this.props.queixas.usouAparelhoAudio === "1" ? (
                        <Aparelho queixas={this.props.queixas} name={this.props.name}/>
                    ):(false)
                    }
                    {this.state.tontura ? (
                        <Tontura queixas={this.props.queixas}/>
                    ):(false)
                    }
            </div>
        );
    }
}

export default Queixas;