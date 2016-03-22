'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var request = require('request');
var expect = chai.expect;

describe('/getFlight', function() {
  describe('get', function() {
    it('should respond with 200 Success', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "airline_name": {
              "type": "string",
              "description": "Name of Airline"
            },
            "carrier_code": {
              "type": "string",
              "description": "Carrier code of the Airline"
            },
            "flight_number": {
              "type": "number",
              "description": "Flight Number"
            },
            "departure_city": {
              "type": "string",
              "description": "Name of City where flight departs from"
            },
            "arrival_city": {
              "type": "string",
              "description": "Name of City where the flight lands."
            },
            "departure_time": {
              "type": "number",
              "description": "Time in ms when the flight departs"
            },
            "arrival_time": {
              "type": "number",
              "description": "Time in ms when the flight lands"
            },
            "ticket_price": {
              "type": "number",
              "description": "Cost of Flight Ticket"
            }
          }
        }
      };

      /*eslint-enable*/
      request({
        url: 'http://localhost:10010/getFlight',
        qs: {
          departure_city: 'DATA GOES HERE',arrival_city: 'DATA GOES HERE'
        },
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

  });

});
