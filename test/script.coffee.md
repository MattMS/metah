# Test script tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../')(h)


## Run tests

	tape 'script tag', (t)->
		t.plan 1

		desired_output = '<script type="text/javascript">(function () {})()</script>'

		func = ->

		actual_output = meta.script(func).outerHTML

		t.deepEqual actual_output, desired_output
