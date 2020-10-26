const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: {
        main: './dist/index.js'
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}
