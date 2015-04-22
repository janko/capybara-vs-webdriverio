'use strict';

var webdriverio = require('webdriverio');
var assert = require('assert');

describe('challenge 1', function () {
  this.timeout(2000);
  var client = {};

  before(function (done) {
    client = webdriverio.remote({
      desiredCapabilities: {
        browserName: 'phantomjs',
      }
    }).init(done)
      .url('http://localhost:9000');
  });

  it('tests adding github links', function (done) {
    client
      .click('<button>')
      .waitForText('<dl>', 2000)
      .getText('<dl>', function (err, text) {
        assert.equal(null, err);
        assert.notEqual(text.indexOf('current_user_url'), -1);
      })
      .call(done);
  });
});
