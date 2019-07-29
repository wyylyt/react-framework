const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(commonConfig,{
    mode:'development',
    devtool: 'eval-source-map',
    module:{
        rules:[
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader', 
                    }, {
                        loader: 'postcss-loader', //添加css3前缀
                        options: {
                            plugins:[require("autoprefixer")("last 100 versions")]
                        },
                    }, {
                        loader: 'sass-loader',
                    }
                ],
            },
        ]
    },
    plugins:[
        // 生成创建html入口文件
        new HtmlWebpackPlugin({
            template:'public/index.html',
            title:'哈哈哈',
            favicon:'src/public/images/warnIcon.png',
            inject:'body',
            minify:{
                html5:true
            },
            hash:false
        }),
        new OpenBrowserPlugin({url:'http://localhost:8080'}),
    ]
})