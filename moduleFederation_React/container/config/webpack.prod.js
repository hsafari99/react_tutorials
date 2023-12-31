const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/', // Added to match the yaml deployment of container
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`, // marketing folder added to guarantee that remoteEntry.js won't be overwrtten by other MFEs
                auth: `auth@${domain}/auth/remoteEntry.js`, // auth folder added to guarantee that remoteEntry.js won't be overwrtten by other MFEs
                dashboard: `dashboard@${domain}/dashboard/remoteEntry.js`, // dashboard folder added to guarantee that remoteEntry.js won't be overwrtten by other MFEs
            },
            shared: { ...deps },
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);