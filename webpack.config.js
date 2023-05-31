const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
  },
  externalsType: 'commonjs',
  externalsPresets: {
    node: true,
  },
  externals: {
    'express': 'express',
    'mongoose': 'mongoose',
    'redis': 'redis',
  },
  target: 'node',
  optimization: {
    minimize: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
};
