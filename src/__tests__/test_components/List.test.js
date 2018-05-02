import React from 'react';
import { shallow } from 'enzyme';


describe("listOfSongs", () => {

    let list = shallow(<ListofSongs />)
  
  it('renders correctly', ()=>{
    expect(list).toMatchSnaptshot();
  })
})