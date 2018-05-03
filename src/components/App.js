import React, { Component} from 'react';
import ListOfSongs from './ListOfSongs';
import data from '../db.json'



class App extends Component {
    
  constructor(){
    super();
    this.state = {
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  
  render(){  
    let filterSongs = data.filter((song) => {
      return song.Year === parseInt(this.state.input)
    })
    return (
      <div>
        <h1>REACT DJ</h1>
        <div className="input-group">
          <input type="text" id="year-input" className="form-control" name="input" placeholder="Enter a year" value={this.state.message} onChange={this.handleInputChange}/>
        </div>
        <div>
          <ListOfSongs 
          />
         </div>
         <div> 
          {
            filterSongs.map(function(song, i){
              return (
                <ul key={i}>{song.Year}, {song.Artist}, {song.Album}</ul>
              )
            })
          }
        </div>  
      </div> 
    )
  }
};



export default App;