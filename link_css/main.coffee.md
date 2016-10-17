# Link stylesheet tag

	module.exports = (h)->
		(href)->
			h 'link',
				href: href
				rel: 'stylesheet'
				type: 'text/css'
