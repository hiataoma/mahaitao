'use strict'

const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: process.env.NODE_ENV === 'development',
	productionSourceMap: false,
	devServer: {
		open: true,
		overlay: {
			warnings: false,
			errors: true
		},
		proxy: {
			'/api': {
				target: process.env.VUE_APP_API_BASE_URL,
				changeOrigin: true,
				ws: true,
				// logLevel: 'debug',
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		// https: true
	},
	configureWebpack: {
		// provide the app's title in webpack's name field, so that
		// it can be accessed in index.html to inject the correct title.
		resolve: {
			alias: {
				'@': resolve('src')
			}
		}
	}
}
