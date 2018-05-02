import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App.js'


describe('App', () =>{

  let app = shallow(<App />)
  it("initializes correctly", () =>{
    expect(app).toMatchSnapshot();
  });

  describe('initializes state successfully', ()=> {
    let app = shallow(<App />)
    it("initializes state as an empty string", () => {
      expect(app.state('input')).toEqual("");
    });
  })

  describe('renders input correctly', () => {
    let app = shallow(<App />)
    it('renders year input correctly', () => {
      expect(app.find('#year-input').length).toEqual(1);
    })
  })

  describe('year input', () => {
    let app = shallow(<App />)
    it('should responde to change event and change the state of the input', () => {
      app.find('#year-input').simulate('change', {target: { name:"input", value:"2007"}})
      expect(app.state('input')).toEqual("2007")
    });
  })

})
