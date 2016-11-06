# Test meta viewport tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../main')(h)


## Run tests

	tape 'meta viewport tag', (t)->
		t.plan 1

		desired_output = '<meta content="width=device-width, initial-scale=1" name="viewport">'

		actual_output = meta.viewport().outerHTML

		t.deepEqual actual_output, desired_output
