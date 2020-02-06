module PolarisTokens
  module Rails
    class Engine < ::Rails::Engine
      initializer 'polaris.tokens' do |app|
        config.assets.paths << PolarisTokens.root.join('dist')
        config.assets.paths << PolarisTokens.root.join('dist-modern/tokens')
      end
    end
  end
end
