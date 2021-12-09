import React from 'react';

function FormGroup(props){
    return(
        <div className={"input-group "+props.className}>
            <span class={"input-group-text "+props.classLabel} id="basic-addon1">{props.label}</span>
            {props.children}
        </div>
    );
}

export default FormGroup;