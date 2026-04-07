const request = require('supertest');
const app = require('../app'); // Adjust this path to point to your Express app

describe('API Endpoints', () => {
  test('GET /api/health', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
  });

  test('GET /api/prices', async () => {
    const response = await request(app).get('/api/prices');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/signals/latest', async () => {
    const response = await request(app).get('/api/signals/latest');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('signal');
  });

  test('GET /api/prices/history/:asset', async () => {
    const asset = 'bitcoin'; // Change this to a valid asset 
    const response = await request(app).get(`/api/prices/history/${asset}`);
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/signals/generate', async () => {
    const response = await request(app)
      .post('/api/signals/generate')
      .send({ asset: 'bitcoin' }); // Adjust payload accordingly
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('success', true);
  });

  test('GET /api/statistics/:asset', async () => {
    const asset = 'bitcoin'; // Change this to a valid asset
    const response = await request(app).get(`/api/statistics/${asset}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('statistics');
  });

  test('GET /api/signals/performance/:asset', async () => {
    const asset = 'bitcoin'; // Change this to a valid asset
    const response = await request(app).get(`/api/signals/performance/${asset}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('performance');
  });

  test('GET /api/signals', async () => {
    const response = await request(app).get('/api/signals');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});