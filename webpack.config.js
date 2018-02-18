var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
