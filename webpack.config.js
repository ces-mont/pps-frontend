const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:'./src/index.js',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/i,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({template:'./public/index.html'})]
}