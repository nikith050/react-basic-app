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
			},
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader : 'file-loader'
			},
			{
		        test: /\.(jpe?g|png|gif|svg)$/i,
		        loaders: [
		            'file?hash=sha512&digest=hex&name=[hash].[ext]',
		            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
		        ]
		    }
		]
	}
}