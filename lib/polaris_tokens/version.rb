# frozen_string_literal: true
require 'json'

module PolarisTokens
  package_json_path = File.join(__dir__, '../../package.json')
  package_json_data = File.read(package_json_path)
  package_json = JSON.parse(package_json_data)

  VERSION = package_json['version']
end
