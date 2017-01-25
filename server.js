var express = require('express');
var path = require('path');
var config = require('./webpack.config.js');
var webpack  = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware')

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve('./dist')))

app.get('/*', function(req, res) {
	res.sendFile(path.resolve('./app/index.html'));
})

app.listen(8080, 'localhost', function(err) {
	if(err) throw err;
	console.log('app running at http://localhost:8080')
})