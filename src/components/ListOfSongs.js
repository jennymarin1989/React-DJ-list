import React from 'react';

const ListOfSongs = (props) => {

    return(

        <div>
           <h1>List of songs</h1>
           <h2>{props.data}</h2>
        </div>    
    )

}

export default ListOfSongs