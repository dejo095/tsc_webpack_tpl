const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            extractComments: false
        })]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },

}