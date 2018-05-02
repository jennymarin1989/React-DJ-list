import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../components/App.js'


describe('App', () =>{

  let app;

  beforeEach(() => {
    app = shallow(<App />)
  });


  it("initializes correctly", () =>{
    expect(app).toMatchSnapshot();
  });

  describe('initializes state successfully', ()=> {
    it("initializes state as an empty string", () => {
      expect(app.state('input')).toEqual("");
    });
  })

  describe('renders input correctly', () => {
    it('renders year input correctly', () => {
      expect(app.find('#year-input').length).toEqual(1);
    })
  })

  describe('year input', () => {
    it('should responde to change event and change the state of the input', () => {
      app.find('#year-input').simulate('change', {target: { name:"input", value:"2007"}})
      expect(app.state('input')).toEqual("2007")
    });
  })

})
