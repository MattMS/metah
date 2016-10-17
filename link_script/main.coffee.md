# Script tag with src

	module.exports = (h)->
		(url)->
			h 'script',
				src: url
				type: 'text/javascript'
