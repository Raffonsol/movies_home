import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieService } from './MovieService';

let instance: MovieService;
beforeAll(() => {
  instance = MovieService.Instance;
});

test('renders singleton service', () => {
  expect(instance).toBeTruthy;
});

test('service can store movies and retrieve them', () => {
  instance.storeMovieData([{id: 0, title: "test"}]);
  expect(instance.getMovieById(0)).toBeTruthy;
});

test('service throws error when movie is not stored', () => {
  instance.storeMovieData([{id: 0, title: "test"}]);
  const spy = jest.spyOn(console, "error");
  expect(instance.getMovieById(1)).toBeFalsy;
  expect(spy).toHaveBeenCalled;
});

