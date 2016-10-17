# Meta http-equiv tag

	module.exports = (h)->
		(content='IE=edge', http_equiv='X-UA-Compatible')->
			h 'meta',
				content: content
				'http-equiv': http_equiv
