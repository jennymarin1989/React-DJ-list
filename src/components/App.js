import React, { Component} from 'react';

class App extends Component {
    
  constructor(){
    super();
    this.state = {
      input: ""
    }
  }


  render(){  
    return (
      <div>
        <h1>REACT DJ</h1>
        <div className="input-group">
        <input type="text" id="year-input" className="form-control" name="input" placeholder="Enter a year" value={this.state.message}/>
        </div>
      </div> 

    )
  }
    
};



export default App;