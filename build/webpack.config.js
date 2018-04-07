const path = require('path');
module.exports = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js', //添加hash值
        path: path.join(__dirname, '../dist'),
        publicPath: '/public' //区分是静态资源还是请求接口吐出来的资源
    }
}