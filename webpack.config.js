module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.png']
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/
			},
			{
        test:/\.css$/,
        use:['style-loader','css-loader']
			}
		]
	}
};