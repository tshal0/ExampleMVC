var path = require('path'),
    webpack = require('webpack');

(function () {
    "use strict";
    
    var config = {
        plugins: [
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDOM: 'react-dom',
                PropTypes: 'prop-types',

                '_': 'lodash'
            })
        ],
        
        entry: {
            site: './Content/entry.jsx'
        },
        
        output: {
            path: path.join(__dirname, 'Content'),
            publicPath: '/Content/',
            filename: '[name].bundle.js'
        },
        
        resolve: {
            alias: {
                '_redux': path.join(__dirname, 'Content', '.redux')
            },
            extensions: ['.jsx', '.js', '.css', '.scss', '.jpeg', '.jpg', '.png', '.gif']
        },
        
        module: {
            loaders: [
                {
                    test: /\.(scss|sass)$/,
                    loader: 'style-loader!css-loader!sass-loader'
                },
                { 
                    test: /\.css$/, 
                    loader: "style-loader!css-loader" 
                },
                {
                    test: /\.jsx?$/,
                    loaders: [
                        'babel-loader?presets[]=es2015,presets[]=react'
                    ],
                    exclude: /node_modules/
                },
                { 
                    test: /\.(gif|jpg|jpeg|png)$/,
                    loader: ['url-loader', 'img-loader']
                },
                { 
                    test: /\.(woff|woff2|otf|eot|ttf|svg|mp4)$/,
                    loader: 'url-loader'
                }
            ]
        }
    };

    /**
     * Determines if it's production build or development
     */
    if(process.env.development == 1) {
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );

        for (var bundle in config.entry) {
            if (!config.entry.hasOwnProperty(bundle))
                continue;

            config.entry[bundle] = [
                'webpack-dev-server/client?http://0.0.0.0:44301', // WebpackDevServer host and port
                'webpack/hot/dev-server', // "only" prevents reload on syntax errors
                config.entry[bundle]
            ];
        }

        config.module.loaders = config.module.loaders.map(loader => {
            if(loader.test.test(".jsx"))
                loader.loaders.unshift (
                    'react-hot-loader/webpack',
                );
            
            return loader;
        });
    }
    else if(process.env.development == 0) {
        console.log("\n----------------------------");
        console.log("THIS IS A PRODUCTION BUILD OF THE REACT APP.");
        console.log("FOR A DEVELOPMENT USE 'NPM START'");
        console.log("----------------------------\n");

        config.plugins.push (
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.UglifyJsPlugin()
        );
    }
    else if (process.env.development == 2) {
        console.log("\n----------------------------");
        console.log("THIS IS A VANILLA DEVELOPMENT WATCHER");
        console.log("FOR A DEVELOPMENT HOTLOADER USE 'NPM START'");
        console.log("----------------------------\n");
    }

    module.exports = config;
}());