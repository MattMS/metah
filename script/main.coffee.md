# Script tag

	module.exports = (h)->
		(func)->
			if 'string' is typeof func
				element = h 'script', {type: 'text/javascript'}, func
			else
				element = h 'script', {type: 'text/javascript'}, "(#{func.toString()})()"

			element.innerHTML = element.innerHTML.replace(/&amp;/g, '&')
			element.innerHTML = element.innerHTML.replace(/&lt;/g, '<')
			element.innerHTML = element.innerHTML.replace(/&gt;/g, '>')
			element
