module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/, // Handle CSS files
          use: [
            'style-loader', // Injects styles into DOM
            {
              loader: 'css-loader', // Interprets `@import` and `url()` like `import/require()` and resolves them
              options: { sourceMap: true }, // Enable source maps
            },
            {
              loader: 'postcss-loader', // Applies PostCSS transformations
              options: {
                postcssOptions: {
                  config: './postcss.config.js', // Path to your postcss.config.js
                },
                sourceMap: true, // Enable source maps
              },
            },
          ],
        },
        {
          test: /\.js$/, // Handle JavaScript files
          enforce: 'pre', // Enforce before other loaders
          use: ['source-map-loader'], // Use source map loader
        },
      ],
    },
    devtool: 'source-map', // Enable source maps for debugging
  };
  