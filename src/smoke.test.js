/**
 * @jest-environment node
 */
const fetch = require('cross-fetch'); 

const waitForServer = async (url, retries = 5, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        return response;
      }
    } catch (err) {
      console.log(`Connection failed. Retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw new Error(`Server at ${url} is not ready after ${retries} retries.`);
};

// --- Tests ---

test('Root URL returns 200', async () => {
  const response = await waitForServer('http://127.0.0.1:5000/');
  expect(response.status).toBe(200);
}, 15000); 

test('Manifest file returns 200', async () => {
  const response = await waitForServer('http://127.0.0.1:5000/manifest.json');
  expect(response.status).toBe(200);
}, 15000);