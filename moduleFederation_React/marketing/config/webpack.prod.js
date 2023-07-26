const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: { ...deps },
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);