import React, { Component} from 'react';
import Header from './Header';
import data from '../db.json';
import '../App.css'



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
      <div className="homepage">
          <Header 
            name = {"DJ REACT!!"}
            class = {"title"}
          />
          <div className="input-group">
            <input type="text" id="year-input" className="form-control" name="input" placeholder="Enter a year and I give you a song..." value={this.state.input} onChange={this.handleInputChange}/>
          </div>
          <div>
            <Header 
              name = {"Song List:"}
              class = {"list"}
            />
          </div>
          <div className="song-list"> 
            {
              filterSongs.map(function(song, i){
                return (
                  <ul className="songs" key={i}>Year:{song.Year}, Title:{song.title}, Artist:{song.Artist}, Album:{song.Album}</ul>
                )
              })
            }
          </div>  
      </div> 
    )
  }
};



export default App;