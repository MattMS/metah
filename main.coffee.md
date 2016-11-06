# Meta tags

	module.exports = (h)->
		author: require('./author/main')(h)
		charset: require('./charset/main')(h)
		description: require('./description/main')(h)
		http_equiv: require('./http_equiv/main')(h)
		link_css: require('./link_css/main')(h)
		link_script: require('./link_script/main')(h)
		script: require('./script/main')(h)
		title: require('./title/main')(h)
		viewport: require('./viewport/main')(h)
