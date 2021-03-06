var PROD = process.argv.indexOf('-p') >= 0;
//var webpack = require('webpack');

module.exports = {
    entry: {
        'echarts-gantt': __dirname + '/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['echarts-gantt'],
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts/lib/echarts': 'echarts'
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'echarts/lib/echarts': 'echarts'
        }
    },
    // plugins: PROD ? [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: { warnings: false }
    //     })
    // ] : []
    plugins:[]
};