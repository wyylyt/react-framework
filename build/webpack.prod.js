const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//分离打包css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 清理旧的dist文件，打包后的
const  {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(commonConfig,{
    mode:'production',
    module:{
        rules:[
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
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
        ],
    },
    plugins:[
        // css分割打包
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
        }),
        // 生成创建html入口文件
        new HtmlWebpackPlugin({
            template:'public/index.html',
            title:'react脚手架',
            favicon:'src/public/images/warnIcon.png',
            inject:'body',
            minify:{
                html5:true
            },
            hash:false
        }),
        new CleanWebpackPlugin(),
    ]
})