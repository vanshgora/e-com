const request = require('supertest');
const app = require('../index');  // Your app's entry point (index.js or app.js)

describe('POST /api/vendors/register', () => {
  it('should register a new vendor and return a token', async () => {
    const vendorData = {
      name: 'Test Vendor',
      email: 'test@vendor.com',
      password: 'password123',
    };

    const res = await request(app)
      .post('/api/vendors/register')
      .send(vendorData)
      .expect(201);

    expect(res.body).toHaveProperty('token');
    expect(res.body.token).toBeDefined();
  });

  it('should return an error if the email is already in use', async () => {
    const vendorData = {
      name: 'Test Vendor',
      email: 'test@vendor.com',  // This email is already registered
      password: 'password123',
    };

    const res = await request(app)
      .post('/api/vendors/register')
      .send(vendorData)
      .expect(400);

    expect(res.body.message).toBe('Email is already in use');
  });
});

describe('POST /api/vendors/login', () => {
    it('should login an existing vendor and return a token', async () => {
      const loginData = {
        email: 'test@vendor.com',
        password: 'password123',
      };
  
      const res = await request(app)
        .post('/api/vendors/login')
        .send(loginData)
        .expect(200);
  
      expect(res.body).toHaveProperty('token');
      expect(res.body.token).toBeDefined();
    });
  
    it('should return an error for invalid credentials', async () => {
      const loginData = {
        email: 'test@vendor.com',
        password: 'wrongpassword',  // Invalid password
      };
  
      const res = await request(app)
        .post('/api/vendors/login')
        .send(loginData)
        .expect(400);
  
      expect(res.body.message).toBe('Invalid email or password');
    });
  });
  
