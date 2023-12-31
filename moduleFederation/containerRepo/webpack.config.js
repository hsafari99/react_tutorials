const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'container', // Only required for remotes. added here for clarity
            remotes: {
                product: 'product@http://localhost:8084/remoteEntry.js',
                cart: 'carts@http://localhost:8083/remoteEntry.js',
            },
            shared: {
                ...deps,
            },
        }),
    ],
}