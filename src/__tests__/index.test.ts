import request from 'supertest'

import app from '../server'

jest.mock('../utils/twitterClient')

describe('GET /', () => {
  // eslint-disable-next-line jest/no-done-callback
  it('should return 200 OK', done => {
    request(app).get('/').expect(200, done)
  })
})
