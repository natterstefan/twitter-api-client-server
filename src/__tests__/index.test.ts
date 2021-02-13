import request from 'supertest'

import app from '../server'

describe('GET /', () => {
  // eslint-disable-next-line jest/no-done-callback
  it('should return 200 OK', done => {
    request(app).get('/').expect(200, done)
  })
})
