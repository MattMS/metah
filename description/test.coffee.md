# Test meta description tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../main')(h)


## Run tests

	tape 'meta description tag', (t)->
		t.plan 1

		desired_output = '<meta content="My description" name="description">'

		actual_output = meta.description('My description').outerHTML

		t.deepEqual actual_output, desired_output
