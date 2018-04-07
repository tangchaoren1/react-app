const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js', //添加hash值
        path: path.join(__dirname, '../dist'),
        publicPath: '/public' //区分是静态资源还是请求接口吐出来的资源
    },
    module: {
        rules: [{
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            },
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../client/template.html')
        }) //生成一个HTML文件
    ]
}