# frozen_string_literal: true

$LOAD_PATH.push File.expand_path('../lib', __FILE__)

require 'polaris_tokens/version'

Gem::Specification.new do |s|
  s.name = 'polaris_tokens'
  s.platform = Gem::Platform::RUBY
  s.version = PolarisTokens::VERSION
  s.required_ruby_version = '> 2.3.0', '!= 2.4.0'
  s.authors = ['Shopify']
  s.email = ['info@shopify.com']
  s.licenses = ['MIT']
  s.homepage = 'https://github.com/Shopify/polaris-tokens#readme'
  s.summary = 'Design Tokens for the Polaris Design System'
  s.description = 'Design Tokens for the Polaris Design System'
  s.files = Dir[
    "{dist,dist-modern/palette,lib}/**/*",
    'README.md',
    'LICENSE.md',
    'package.json',
    'index.js'
  ]
  s.require_paths = ['lib']
end
