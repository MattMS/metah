# Test script tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../')(h)


## Run tests

	tape 'script tag', (t)->
		t.plan 2

		desired_output = '<script type="text/javascript">(function () {})()</script>'

		func = ->

		actual_output = meta.script(func).outerHTML

		t.deepEqual actual_output, desired_output


		desired_output = [
			'<script type="text/javascript">(function () {'
			"      return document.addEventListener('DOMContentLoaded', function(event) {"
		    "        return console.log('Ready.');"
			'      });'
			'    })()</script>'
		].join '\n'

		func = ->
			document.addEventListener 'DOMContentLoaded', (event)->
				console.log 'Ready.'

		actual_output = meta.script(func).outerHTML

		t.deepEqual actual_output, desired_output
