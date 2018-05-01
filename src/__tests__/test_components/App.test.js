import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App.js'


describe('App', () =>{

  let app = shallow(<App />)

  it("initializes correctly", () =>{
    expect(app).toMatchSnapshot();
  });

})
