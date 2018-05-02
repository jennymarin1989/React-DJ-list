import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App.js'


describe('App', () =>{

  let app = shallow(<App />)

  it("initializes correctly", () =>{
    expect(app).toMatchSnapshot();
  });

  describe('initializes state successfully', ()=> {
    it("initializes state as an empty string", () => {
      expect(app.state('input')).toEqual("");
    })
  })

})
