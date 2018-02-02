import React from 'react';
import App from './App';
import expect from 'expect'
import { shallow, mount } from 'enzyme'

var enzyme = require('enzyme');

var wrapper = enzyme.mount(<App />);

describe('App Component', () => {

  it('Number of Notifications in state', () => {
    expect(wrapper.state().noOfNotficaions).toBe(4);
    })

   it('Badge length', () => {
      //  expect(wrapper.find('Badge').exists()).toBe(true)
      expect(wrapper.find('Badge').length).toBe(1)
  })

  //  it('Notificaton Icon', () => {
  //   expect(wrapper.find('Button').length).toBe(1)
  // })
 
   it('Notification Header', () => {
   expect(wrapper.find('Subheader').exists()).toBe(true)
  })
 /*  it('Notification List', () => {
      // expect(wrapper.find('.notRead').exists()).toBe(true)
     expect(wrapper.find('ListItem').length).toBe(4)
  })*/
  it('Clicking on Notification', () => {
       wrapper.find('Button').first().simulate('click');
        console.log( wrapper.find('Button').length);
       expect(wrapper.state().noOfNotficaions).toBe(3);
       expect(wrapper.state().notification[0].read).toBe(true)
     
  })
 
  
  // it('renders p', () => {
  //   expect(wrapper.find('p').text()).toEqual('Welcome to my world')
  // })
})