# Meta description tags

	module.exports = (h)->
		(content)->
			h 'meta',
				content: content
				name: 'description'
