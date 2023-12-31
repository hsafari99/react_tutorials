const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html',
        },
        hot: true,
    },
    output: {
        publicPath: 'http://localhost:8081/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8082/remoteEntry.js',
                auth: 'auth@http://localhost:8083/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8084/remoteEntry.js',
            },
            shared: { ...deps, },
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);