import React, { Component} from 'react';
import ListOfSongs from './ListOfSongs';
import data from '../db.json'
import SubmitButton from './SubmitButton';

console.log(data)

class App extends Component {
    
  constructor(){
    super();
    this.state = {
      input: ""
    }
  }
  
  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
    console.log(event)
    
  }

 getListOfSongs = (data, event) =>{
    let list = data.filter(function(song){
      return song.year === event;
    })
    console.log(list)
   
 } 
 

 


  render(){  
    return (
      <div>
        <h1>REACT DJ</h1>
        <div className="input-group">
          <input type="text" id="year-input" className="form-control" name="input" placeholder="Enter a year" value={this.state.message} onChange={this.handleInputChange}/>
          <SubmitButton
            name={"Search"}
             />
        </div>
        <div>
          <ListOfSongs />
        </div>  
      </div> 

    )
  }
    
};



export default App;