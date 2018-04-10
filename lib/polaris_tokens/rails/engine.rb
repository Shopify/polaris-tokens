module PolarisTokens
  module Rails
    class Engine < ::Rails::Engine
      initializer 'polaris.tokens' do |app|
        config.assets.paths << PolarisTokens.root.join('dist')
      end
    end
  end
end
