// jshint esversion:6

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const assert = require('assert');
const request = require('supertest');


const app = require('../app');

// wite these later 

describe('GET smoke test', function(){
  it('smole tested', function(done){
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(done);
  });
  it('get all products', function(done){
    quest(app)
    .get("./products")
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .expect([{id:1, title: 'Mulan', formatt: 'DVD'}]);
  });
  it("add new product", function(){
    request(app)
    .post('/products')
    .type('form')
    .set('Accept', 'application/json') //sets header 
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(({title: 'IT', formatt: 'streaming'}))
    .expect('Content-Type',/application\/json/)
    .expect(function (res){
      return(res.bod.id && typeof res.body.id === 'number');
    })
      .end(done);
  });
});