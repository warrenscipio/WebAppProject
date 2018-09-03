const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:[
                    {loader:'babel-loader'}
                ]
            },
            {
                test: /\.css/,
                exclude:/node_modules/,
                use:[
                    {loader:'style-loader'},{loader:'css-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}