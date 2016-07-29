# Script tag

	module.exports = (h)->
		(func)->
			h 'script', {type: 'text/javascript'}, "(#{func.toString()})()"
