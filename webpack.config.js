const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDEvelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDEvelopment ? 'development': 'production',
    devtool: isDEvelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx'],
    },
    devServer:{
        static: './'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use: 'babel-loader',
            },
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
}