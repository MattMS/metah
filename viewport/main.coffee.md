# Meta viewport tags

	module.exports = (h)->
		(content="width=device-width, initial-scale=1")->
			h 'meta',
				content: content
				name: 'viewport'
