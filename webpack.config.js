const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Setup entry and output dir of our app
//webpack will bundle all JS fles into index_bundle.s files inside /dist directory
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index_bundle.js"
    },

    /*Add some loader :
       1. Babel-loader is used to load all jsx/js files and bundle into one file
       2. css-loader is used to load and bundle all css files into one file 
       3. Styles-loader will add all te styles inside the style tag of the document
    */
    module: {
        rules: [
            //load and bundle .js files except those in /node_modules/
       {     
                test: /\.js$/,
                exclude: /node_modules/,
           use: {
               loader:"babel-loader"
                },
            
            },
            //Load and bundle .css file
            {
                test: /\.css$/,
                //Keep in mind that webpack executes the loader from right to left
                //(ie.form.css file(with css-loaders) to style tagss(with style-loaders))
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    /*Install and import html-webpack-plugin:
     1. This plugin picks the Index.html file form /src dir and
     2. Inject the js scripts into the html  and wriet a new Index.html in /dist dir
     */
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/Index.html"
        })
    ]
    
};