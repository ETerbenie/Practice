const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/js/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        port: 3000
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, '../src/js/components')
        }
    },
    module: {
        rules: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.s?css/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/html/index.html')
        })
    ]
};