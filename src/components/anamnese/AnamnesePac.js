import React from 'react';
import Card from '../Card';

class AnamnesePac extends React.Component{

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
                
            </Card>
        );
    }
}


export default AnamnesePac;