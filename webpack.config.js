var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var APP_PATH = path.resolve(__dirname + '/src/app.js');
var BUILD_PATH = path.resolve(__dirname + '/build/');

module.exports = {
	entry: {
		app: APP_PATH
	},
	output: {
		path: BUILD_PATH,
		filename: "output.js"
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: "vue-loader"
		}, {
			test: /\.css$/,
			loader: 'style!css!autoprefixer'
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				presets: ['es2015']
			}
		}]
	},
	vue: {
		loaders: {
			js: 'babel',
			css: 'style!css!autoprefixer'
		}
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {}
  },  
  devServer: {
  	historyApiFallback: true,
  	hot: true,
  	inline: true,
  	progress: true,
  },
  plugins:[
  new HtmlwebpackPlugin({
  	title: 'Hello World app',
  	template: './index.html',
  	filename: './index.html'
  })
  ]
}