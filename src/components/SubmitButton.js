import React from 'react';

const SubmitButton = (props) => {
    
    return(
        <button id={props.id} className="btn btn-success">{props.name}</button>
    )

}

export default SubmitButton;