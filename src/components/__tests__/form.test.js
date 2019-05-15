import React from 'react';
import Form from '../../components/form';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(<Form />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('is an anagram', () => {
  const wrapper = mount(<Form/>)
  const firstInput = wrapper.find('input').at(0);
  const secondInput = wrapper.find('input').at(1);

  firstInput.instance().value = 'y';
  firstInput.simulate('change');
  secondInput.instance().value = 'y';
  secondInput.simulate('change');

  wrapper.find('button').at(0).simulate('click');
  expect(wrapper.find('span').at(0).text()).toEqual('It\'s an anagram!');
});

it('is not an anagram', () => {
  const wrapper = mount(<Form />)
  const firstInput = wrapper.find('input').at(0);
  const secondInput = wrapper.find('input').at(1);

  firstInput.instance().value = 'ydao';
  firstInput.simulate('change');
  secondInput.instance().value = 'adyb';
  secondInput.simulate('change');

  wrapper.find('button').at(0).simulate('click');
  expect(wrapper.find('span').at(0).text()).toEqual('It isn\'t an anagram!');
});
