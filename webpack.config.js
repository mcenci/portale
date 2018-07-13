const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
       index : './src/index.js',
       style: './src/index.less'
    },
    output: {
      path: __dirname + '/dist',
      publicPath: './',
      filename: '[name]-bundle.js',
      chunkFilename: '[name].bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
           /*  {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    }
                )
            }, */
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader', options: {minimize: true}
                            },
                        'less-loader',
                    ],
                    }
                )
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }                
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: false}
                  }
                ]
            }
        ]      
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [ 
        new ExtractTextPlugin({filename: 'styles/[name].css',allChunks: true,}),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
          })
    ]
  };