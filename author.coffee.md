# Meta author tag

	module.exports = (h)->
		(content)->
			h 'meta',
				content: content
				name: 'author'
