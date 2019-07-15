const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpack = require('webpack');
// const webpack = require('webpack')
const mode = '';

const config = {
    // this is a preprocessor that maps bundled code into its initial sourced code and other minified files
    devtool: 'source-map',

    mode: 'development',
    // to accept HMR middlewares entry points will be tweaked to be an array or object
    entry: {
        app: ['./src/App.jsx',],
        vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router-dom', 'react-bootstrap'],
    },
    // the output filename will be hashed
    output: {
        path: path.resolve(`${__dirname  }/static`),
        filename: mode === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
    },
    // bundle splitting and  splitting vendor node_modules packages into individual packages 
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            // state and define rules that webpack will use while splitting our vendor packages
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            reducers: path.resolve(__dirname, './src/reducers')
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './static/index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),// so that file hashes don't change unexpectedly
    ],
    // this plugin is for HMR middlewaress
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            use: { loader: 'babel-loader' },
            exclude: /node_modules/
        }]
    },
    // this one handle the webpark-dev-server port to apis
    devServer: {
        port: 8080,
        contentBase: 'static',
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
            },
        },
    },


};
module.exports = config;