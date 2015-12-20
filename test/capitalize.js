var utils = require('../index.js')
var expect = require('expect.js')

describe('Capitlize Strings', function () {
	it('should capitalize my name', function(){
		var name = 'senica'
		expect(name.capitalize()).to.equal('Senica')
	})
})
