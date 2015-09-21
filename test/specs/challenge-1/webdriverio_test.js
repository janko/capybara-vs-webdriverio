import assert from 'assert';

describe('challenge 1', () => {
  it('tests adding github links', () => {
    return browser
      .url('/challenge-1.html')
      .click('button')
      .waitForText('dl', 2000)
      .getText('dl').then((text) => {
        assert.notEqual(text.indexOf('current_user_url'), -1);
      });
  });
});
