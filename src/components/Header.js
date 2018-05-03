import React from 'react';

const Header = (props) => {

    return(

        <div className={props.class}>
           <h1>{props.name}</h1>
        </div>    
    )

}

export default Header;