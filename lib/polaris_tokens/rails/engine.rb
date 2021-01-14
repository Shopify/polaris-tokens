module PolarisTokens
  module Rails
    class Engine < ::Rails::Engine
      initializer 'polaris.tokens' do |app|
        config.assets.paths << PolarisTokens.root.join('dist')
        config.assets.paths << PolarisTokens.root.join('dist-modern')
      end
    end
  end
end
