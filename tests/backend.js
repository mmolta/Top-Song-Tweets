const request = require('supertest'),
		  chai = require('chai'),
		  expect = chai.expect,
		  app = require('../server')

// testing for file types
describe('GET requests', () => {

	it('serves a javascript file', () => {
		return request(app)
			.get('/client/scripts/index.js')
			.expect('Content-Type', /javascript/)
			.then(res => {

			})
	})

})