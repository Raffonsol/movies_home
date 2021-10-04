import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Collage from './Grid';
import { UnsplashImage } from './Grid';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders infinite scroll', () => {
  const wrapper = mount(<Collage />);
  const mEvent = {
    target: {
      scrollWidth: 100,
      scrollLeft: 50,
      clientWidth: 50,
    },
  };
  const scroll = wrapper.find("#scroll");
  scroll.simulate('scroll', mEvent);
  expect(scroll).toBeInTheDocument;
});

test('renders individual image and is clickable', () => {
  const callback: () => void = () => true;
  const mock = jest.fn(callback);
  const wrapper = shallow(<UnsplashImage url={"testTitle"} key={1} id={1} clickEvent={callback}/>);
  const image = wrapper.find('#image');
  image.simulate('click');
  expect(mock).toHaveBeenCalled;
});
