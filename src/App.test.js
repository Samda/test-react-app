import React from 'react'
import { mount } from 'enzyme';
import App from './App';


describe("Couter Test", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  })

  test('renders Title Counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is Counter App')
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })

  test("render a button with text of `decrement`", () => {
    expect(wrapper.find('#decrement-btn').text()).toBe('Decrement')
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1")
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

})

