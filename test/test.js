
var assert = require('assert');
var rework = require('rework');
var important = require('..');
var expected = read('important.out.css');
var input = read('important.css');

describe('important', function(){
  it('should work', function(){
    var out = rework(input).use(important());
    assert(expected.trim() == out.toString().trim());
  })
})

function read(fixture){
  return require('fs').readFileSync(__dirname + '/fixture/' + fixture).toString();
}
