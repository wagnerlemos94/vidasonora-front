import React from 'react';
import Card from '../components/Card';

class Prontuario extends React.Component{
    
    state = {
        titulo:'Cadastro de Prontuário'
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                
            </Card>
        );
    }
}


export default Prontuario;