const PnpWebpackPlugin = require("pnp-webpack-plugin");

module.exports = {
    webpack: {
        configure: {
            resolve: {
                plugins: [
                    PnpWebpackPlugin
                ]
            },
            resolveLoader: {
                plugins: [
                    PnpWebpackPlugin.moduleLoader(module)
                ]
            }
        }
    }
};
