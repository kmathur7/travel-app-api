'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var request = require('request');
var expect = chai.expect;

describe('/addFlights', function() {
  describe('post', function() {
    it('should respond with 200 Success', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "string"
      };

      /*eslint-enable*/
      request({
        url: 'http://localhost:10010/addFlights',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          FlightData: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        expect(res.statusCode).to.equal(200);

        expect(validator.validate(body, schema)).to.be.true;
        done();
      });
    });

  });

});
