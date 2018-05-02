import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';

describe ("SubmitButton", () =>{
    
    let button = shallow(<SubmitButton/>)
  
    it("renders correctly", () => {
       expect(button).toMatchSnapshot(); 
    })

})
