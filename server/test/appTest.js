const assert = require('chai').assert;
const app = require('../routes/log.ts');

describe('App', function () {
  it('app should return hello', function () {
    assert.equal(app(), 'hello');
  });
});
