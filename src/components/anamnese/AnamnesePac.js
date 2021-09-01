import React from 'react';
import Anamnese from './Anamnese';

class AnamnesePac extends React.Component{

    state = {
    }

    render(){
        return(
            <div>
                <Anamnese anamnese={this.props.anamnese}/>
            </div>
        );
    }
}


export default AnamnesePac;