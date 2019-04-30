// next.config.js
module.exports = {
  webpack(config) {
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        entries['main.js'].unshift('./client/polyfills.js');
      }

      return entries;
    };

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    config.node = {
      fs: 'empty',
    };

    return config;
  },
  publicRuntimeConfig: { // Will be available on both server and client
    WP_URL: 'http://178.62.114.149',
  }
};
