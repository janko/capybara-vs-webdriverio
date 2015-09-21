require "minitest/autorun"
require "minitest/pride"

require "capybara"
require "capybara/poltergeist"

require "roda"

Roda.route do |r|
  r.root { File.read("test/fixtures/challenge-1.html") }
end

Capybara.configure do |config|
  config.default_driver = :poltergeist
  config.app = Roda.app
end

class Challenge1 < Minitest::Test
  include Capybara::DSL

  def test_adding_github_links
    visit "/"

    click_on "Generate links"

    assert page.has_text?("current_user_url")
  end
end
