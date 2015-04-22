'use strict';

var webdriverio = require('webdriverio');
var assert = require('assert');

describe('challenge 1', function () {
  this.timeout(99999999);
  var client = {};

  before(function (done) {
    client = webdriverio.remote({
      desiredCapabilities: {
        browserName: 'phantomjs',
      }
    }).init(done);
  });

  it('tests adding github links', function (done) {
    client
      .url('http://localhost:9000')
      .click('<button>')
      .waitForExist('<dt>')
      .getText('<dt>', function (err, text) {
        assert.equal(null, err);
        assert.notEqual(text.indexOf('current_user_url'), -1);
      })
      .call(done);
  });
});
