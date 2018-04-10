module PolarisTokens
  require 'polaris_tokens/rails/engine'

  def self.root
    @root ||= Pathname.new(File.expand_path('../..', __FILE__))
  end
end
