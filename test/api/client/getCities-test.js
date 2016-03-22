'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var request = require('request');
var expect = chai.expect;

describe('/getCities', function() {
  describe('get', function() {
    it('should respond with 200 Success', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "city_name": {
              "type": "string",
              "description": "Name of security"
            },
            "city_code": {
              "type": "string",
              "description": "Airport Code"
            }
          }
        }
      };

      /*eslint-enable*/
      request({
        url: 'http://localhost:10010/getCities',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        expect(res.statusCode).to.equal(200);

        expect(validator.validate(body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with default Error', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "message"
        ],
        "properties": {
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      request({
        url: 'http://localhost:10010/getCities',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        expect(res.statusCode).to.equal('DEFAULT RESPONSE CODE HERE');

        expect(validator.validate(body, schema)).to.be.true;
        done();
      });
    });

  });

});
