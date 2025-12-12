import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import axios from 'axios';
import { sampleWeatherResponse } from './tests/weatherFixture';

jest.mock('axios');

// test: verify the API is called with configuration
test('non-functional: weather API is requested with imperial units', async () => {
  axios.get.mockResolvedValueOnce({ data: sampleWeatherResponse });

  render(<App />);

  const input = screen.getByPlaceholderText(/enter location/i);

  fireEvent.change(input, { target: { value: 'Toronto' } });
  fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled();
  });

  const calledUrl = axios.get.mock.calls[0][0];
  expect(calledUrl).toMatch(/units=imperial/);
});