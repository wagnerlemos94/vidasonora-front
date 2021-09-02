import React from 'react';
import Anamnese from './Anamnese';
import Card from '../Card';
import FormGroup from '../FormGroup';
import RadioButtonSimNao from './RadioButtonSimNao';

class AnamnesePac extends React.Component{

    state = {
        titulo:"Anamnese PAC"
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                <Anamnese anamnese={this.props.anamnese}/>
                <Card className="mt-1">
                    <div className="row">
                        <div className="col">
                        <FormGroup className="row mb-1" htmlForm="" label="Compreende bem a conversação?">
                            <RadioButtonSimNao className="ml-3"/>                    
                        </FormGroup>
                        </div>
                        <div className="col">
                        <FormGroup className="row mb-1" htmlForm="" label="Em que situação a conversação é mais difícil?">
                            <RadioButtonSimNao className="ml-3"/>                    
                        </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <FormGroup className="row mb-1" htmlForm="" label="Escuta bem em ambiente silencioso?">
                            <RadioButtonSimNao className="ml-3"/>                    
                        </FormGroup>
                        </div>
                        <div className="col">
                        <FormGroup className="row mb-1" htmlForm="" label="Escuta bem em ambiente ruidoso?">
                            <RadioButtonSimNao className="ml-3"/>                    
                        </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">                        
                            <FormGroup className="row mb-1" htmlForm="" label="É desatento?">
                                <RadioButtonSimNao className="ml-3"/>                    
                            </FormGroup>
                        </div>
                        <div className="col">
                        <FormGroup className="row mb-1" htmlForm="" label="É muito quieto?">
                            <RadioButtonSimNao className="ml-3"/>                    
                        </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <FormGroup className="row mb-1" htmlForm="" label="Localiza o som? ">
                            <RadioButtonSimNao className="ml-3"/>                    
                        </FormGroup>
                        </div>
                        <div className="col">
                        <FormGroup className="row mb-1" htmlForm="" label="É agitado?">
                            <RadioButtonSimNao className="ml-3"/>
                        </FormGroup>
                        </div>
                    </div>
                </Card>
            </Card>
        );
    }
}


export default AnamnesePac;