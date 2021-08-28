import React from 'react';
import Card from './Card';
import FormGroup from './FormGroup';

class AnamnesePac extends React.Component{

    constructor(){
        super();
    }

    state = {
        titulo:"Anamnese PAC",
        prontuario:{
            nomeMedico:"",
            preferenciaManual:"",
            escolaridade:""
        }
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                <FormGroup htmlForm="nomeMedico" label="Encaminhado por :">
                    <input type="text" className="form-control" placeholder="Ex: Dr. Daniel"
                        value={this.state.prontuario.nomeMedico}
                       onChange={e => this.setState({prontuario:{
                            ...this.state.prontuario,
                            nomeMedico: e.target.value
                        }})}
                        required
                    />
                </FormGroup>
                <div className="row">
                    <div className="col">
                        <FormGroup htmlForm="preferenciaManual" label="Preferência manual :">
                            <select className="form-control" 
                                onChange={e => this.setState({prontuario:{
                                    ...this.state.prontuario,
                                    preferenciaManual: e.target.value
                                }})}
                                required
                            >
                                <option value="" disabled selected>Selecione...</option>
                                <option value="DESTRA">DESTRA</option>
                                <option value="CANHOTA">CANHOTA</option>
                            </select>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup htmlForm="escolaridade" label="Escolaridade :">
                            <input type="text" className="form-control" placeholder="Ex: Superior Completo"
                                value={this.state.prontuario.escolaridade}
                                onChange={e => this.setState({prontuario:{
                                    ...this.state.prontuario,
                                    escolaridade: e.target.value
                                }})}
                                required
                                />
                        </FormGroup>
                    </div>
                </div>
            </Card>
        );
    }
}


export default AnamnesePac;