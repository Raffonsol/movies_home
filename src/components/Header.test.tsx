import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

test('renders  component with test title', () => {
  const testTitle: string = "test title";
  render(<Header title={testTitle} />);
  const headerTitle = screen.getByText(/test title/);
  expect(headerTitle).toBeInTheDocument();
});

test('renders component with return button which calls a function', () => {
  const testTitle: string = "test title";
  const callback: () => void = () => true;
  const mock = jest.fn(callback);
  const wrapper = shallow(<Header title={testTitle} showReturn={true} clickReturn={callback}/>);
  const button = wrapper.find('#backButton');
  button.simulate('click');
  expect(mock).toHaveBeenCalled;
});

