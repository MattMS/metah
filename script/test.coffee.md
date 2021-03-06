# Test script tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../main')(h)


## Run tests

### Functions

	tape 'function script tag with empty function', (t)->
		t.plan 1

		desired_output = '<script type="text/javascript">(function () {})()</script>'

		func = ->

		actual_output = meta.script(func).outerHTML

		t.deepEqual actual_output, desired_output


	tape 'function script tag with content', (t)->
		t.plan 1

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


	tape 'function script tag with ampersand in content', (t)->
		t.plan 1

		desired_output = [
			'<script type="text/javascript">(function () {'
			'      return 1 && 2 < 3 && 5 > 4;'
			'    })()</script>'
		].join '\n'

		func = ->
			1 and 2 < 3 and 5 > 4

		actual_output = meta.script(func).outerHTML

		t.deepEqual actual_output, desired_output


### Text

	tape 'text script tag with empty function', (t)->
		t.plan 1

		desired_output = '<script type="text/javascript"></script>'

		func = ''

		actual_output = meta.script(func).outerHTML

		t.deepEqual actual_output, desired_output


	tape 'text script tag with content', (t)->
		t.plan 1

		desired_output = [
			'<script type="text/javascript">' + "document.addEventListener('DOMContentLoaded', function(event) {"
		    "	return console.log('Ready.')"
			'})</script>'
		].join '\n'

		func = '''
		document.addEventListener('DOMContentLoaded', function(event) {
			return console.log('Ready.')
		})
		'''

		actual_output = meta.script(func).outerHTML

		t.deepEqual actual_output, desired_output


	tape 'text script tag with ampersand in content', (t)->
		t.plan 1

		desired_output = '<script type="text/javascript">1 && 2 < 3 && 5 > 4</script>'

		func = '1 && 2 < 3 && 5 > 4'

		actual_output = meta.script(func).outerHTML

		t.deepEqual actual_output, desired_output
