# Meta tags

	module.exports = (h)->
		author: require('./author')(h)
		charset: require('./charset')(h)
		description: require('./description')(h)
		http_equiv: require('./http_equiv')(h)
		link_script: require('./link_script')(h)
		script: require('./script')(h)
		viewport: require('./viewport')(h)
