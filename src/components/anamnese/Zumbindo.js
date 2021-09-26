import React from 'react';
import FormGroup from '../FormGroup';
import RadioButtonSimNao from './RadioButtonSimNao';


class Zumbindo extends React.Component{
    state = {
        
    }

    render(){
        return(
            <div>
                <FormGroup className="row mb-1" htmlForm="zumbindo" label="Zumbindo? ">
                    <RadioButtonSimNao className="ml-3" name={"zumbindo"+this.props.name} id="zumbindo" htmlForm="zumbindo"
                        onChange={e => 
                        this.setState({
                            ...this.props.zumbido.option = e.target.value
                        })
                        }/>
                </FormGroup>
            </div>
        );
    }
}

export default Zumbindo;