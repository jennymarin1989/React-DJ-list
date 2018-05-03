import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';

describe ("SubmitButton", () => {
    
    let button = shallow(<SubmitButton/>)
  
    it("renders correctly", () => {
       expect(button).toMatchSnapshot(); 
    });

    it("renders button correctly", ()=>{
      expect(button.getElement('button')).toBeDefined();
    })

    // it("handles clicks", () =>{
    //   let OnClickSpy = jest.fn();
    //   let listByYear = shallow(<SubmitButton  onClick={OnClickSpy}/>);
    //   listByYear.find('button').simulate('click');
    //   expect(OnClickSpy).toHaveBeenCalled();
    // })

  })
