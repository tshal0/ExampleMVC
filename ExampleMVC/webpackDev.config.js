var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');

if(process.env.development == 1) {
    console.log("\n----------------------------");
    console.log("THIS IS A DEVELOPMENT VERSION OF THE REACT APP.");
    console.log("FOR A PRODUCTION BUILD USE 'NPM RUN BUILD'");
    console.log("----------------------------\n");

    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        https: false,
        historyApiFallback: true
    }).listen(44301, 'localhost', function (err, result) {
        if (err) {
            return console.log(err);
        }
    });
}