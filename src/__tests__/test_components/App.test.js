import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../components/App.js'


describe('App', () =>{

  let app;

  beforeEach(() => {
    app = shallow(<App />)
  });

  describe('renders components correctly',() => {
    it("renders correctly", () =>{
      expect(app).toMatchSnapshot();
    });

    it('renders list of songs component correctly', () =>{
      expect(app.find('ListOfSongs').exists()).toBe(true);
    });

    it('renders SubmitButton component correctly', () =>{
      expect(app.find('SubmitButton').exists()).toBe(true);
    })
  })
  
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
  });

  describe('returns an array of objects from data.json', () => {
    it('should return objects related with the year input', () =>{
      let songs = [
        {"title":"Sunday bloody Sunday", "Artist": "u2", "Album": "The Joshua Tree", "year": 2000 },
        {"title":"When you were young", "Artist": "THe killers", "Album": "Human", "year": 2008 }
      ]
     expect(app.getListOfSongs(songs, 2000)).toEqual({"title":"Sunday bloody Sunday", "Artist": "u2", "Album": "The Joshua Tree", "year": 2000 });
    })
  })

})
