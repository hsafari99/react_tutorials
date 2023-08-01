const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/', // Added to match the yaml deployment of container
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            exposes: {
                './AuthApp': './src/bootstrap',
            },
            shared: { ...deps },
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);