const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
    mode: 'development',
    devServer: {
        port: 8084,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'product',
            filename: 'remoteEntry.js',
            exposes: {
                './list': './src/index.js',
            },
            shared: {
                ...deps,
            },
        }),
    ],
}