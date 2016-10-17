# Meta charset tag

	module.exports = (h)->
		(content='utf-8')->
			h 'meta', charset: content
