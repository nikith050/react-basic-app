var webpack = require('webpack');
var path = require('path')

module.exports = {
	devTool: 'source-map',

	entry:[
		'./app/main.js'
	],

	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	plugins:[
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	module: {

		loaders:[
			{
				test: /\.js$/,
				loader: "babel",
				exclude: /node_modules/,

				query: {
					presets:["react", "es2015"]
				}
			}
		]
	}
}