module.exports = {
    mode: 'development',
    entry: './src/Game',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/client',
    },
    devtool: 'inline-cheap-module-source-map',
  };