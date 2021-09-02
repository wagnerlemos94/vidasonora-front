import React from 'react';
import Anamnese from './Anamnese';
import Card from '../Card';

class AnamnesePac extends React.Component{

    state = {
        titulo:"Anamnese PAC"
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                <Anamnese anamnese={this.props.anamnese}/>
            </Card>
        );
    }
}


export default AnamnesePac;