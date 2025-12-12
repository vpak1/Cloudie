import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import axios from 'axios';
import { sampleWeatherResponse } from './tests/weatherFixture';

jest.mock('axios');

// test 1: API is called when user presses Enter
test('functional: calls weather API when user presses Enter', async () => {
  axios.get.mockResolvedValueOnce({ data: sampleWeatherResponse });

  render(<App />);

  const input = screen.getByPlaceholderText(/enter location/i);

  fireEvent.change(input, { target: { value: 'Toronto' } });

  fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

// test 2: renders weather data after successful response
test('functional: displays weather data after successful API response', async () => {
  axios.get.mockResolvedValueOnce({ data: sampleWeatherResponse });

  render(<App />);

  const input = screen.getByPlaceholderText(/enter location/i);

  fireEvent.change(input, { target: { value: 'Toronto' } });
  fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  await waitFor(() => {
    expect(screen.getByText(/Toronto/)).toBeInTheDocument();
  });

  expect(screen.getByText(/Feels Like/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed/i)).toBeInTheDocument();
});