import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Matheus Kindrazki',
        email: 'matheuskindrazki@gmail.com',
        password_hash: 'asdhk1238khjnas',
      });

    expect(response.body).toHaveProperty('id');
  });
});
