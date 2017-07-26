const request = require('supertest'),
		  chai = require('chai'),
		  expect = chai.expect,
		  app = require('../server')

// testing for file types
describe('GET requests', () => {

	it('serves an html file', () => {
		return request(app)
			.get('/')
			.expect(200)
			.then(res => {
				expect(res.body.to.contain)
			})
	})

	it('serves a javascript file', () => {
		return request(app)
			.get('/client/scripts/index.js')
			.expect('Content-Type', /javascript/)
			.then(res => {

			})
	})

})