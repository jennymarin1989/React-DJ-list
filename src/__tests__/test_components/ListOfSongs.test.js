import React from 'react';
import { shallow } from 'enzyme';
import ListOfSongs from '../../components/ListOfSongs'


describe("listOfSongs", () => {

    let list = shallow(<ListOfSongs />)
  
  it('renders correctly', ()=>{
    expect(list).toMatchSnapshot();
  })
})