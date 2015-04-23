'use strict';

var webdriverio = require('webdriverio');
var selenium = require('selenium-standalone');
var assert = require('assert');

describe('challenge 1', function () {
  this.timeout(999999);
  var client = {};
  var clientOptions = {
    desiredCapabilities: {
      browserName: 'phantomjs'
    }
  };

  before(function (done) {
    selenium.install({
      logger: function (message) { }
    }, function () {
      selenium.start(function (err, child) {
        if (err) { throw (err); }
        selenium.child = child;
        client = webdriverio.remote(clientOptions)
          .init()
          .url('http://localhost:9000', done);
      });
    });
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

  after(function (done) {
    selenium.child.kill();
    client.end(done);
  });
});
