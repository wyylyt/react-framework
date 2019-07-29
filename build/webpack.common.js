const path = require('path');
const DIST_PATH = path.resolve(__dirname,'../dist');
const webpack = require('webpack');

module.exports = {
    // 入口文件
    entry:{
        app:'./src/entrance/app.js'
    },
    // 输出文件
    output:{
        filename:'js/bundle[hash:8].js',
        path:DIST_PATH
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: [
                    {
                        loader:'babel-loader',
                        options:{
                            cacheDirectory: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            //处理图片 小于512 base64 大于512图片
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 512,
                            name: './img/[hash:8].[ext]'
                        }
                    },
                ]
            },
            // 处理字体
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      name: "[name]-[hash:5].min.[ext]",
                      limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                      publicPath: "fonts/",
                      outputPath: "fonts/"
                    }
                  }
                ]
            }
        ]
    },
    resolve: {
        alias: {
          // 图片别名
          img: path.resolve(__dirname, '../src/public/images'),
        },
    },
    plugins:[
        // webpack配置ProvidePlugin后，在使用时将不再需要import和require进行引入，直接使用即可。
        new webpack.ProvidePlugin({
            React: 'react',
            Component: ['react', 'Component'],
            ReactDOM: 'react-dom',
        }),
    ]
}