# Capybara vs Webdriver.io

The goal of this project is to compare [Capybara](https://github.com/jnicklas/capybara)
of the Ruby world and Webdriver.io of the Node.js world. The purpose is to
prove that Webdriver.io is better, so that we reinforce my statement that frontend
code written in JavaScript is always better than if it was written in Ruby.
Because I really love Ruby, but I find it painful to write browser tests in it,
and as a backend Rubyist I really don't want to.

## Implementation

The project is split into challenges, and each challenge is composed of:

* HTML page which needs to be tested
* Capybara test for that HTML page
* Webdriver.io test for that HTML page

May the best browser testing library win!

## Dependencies

Othen than Ruby and Node.js, it requires PhantomJS to be installed.
