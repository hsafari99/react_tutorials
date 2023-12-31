const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html',
        },
        hot: true,
    },
    output: {
        publicPath: 'http://localhost:8082/', // to make sure that main.js file is loaded from the right source
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: { ...deps, },
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);