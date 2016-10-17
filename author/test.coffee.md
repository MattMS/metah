# Test meta author tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../main')(h)


## Run tests

	tape 'meta author tag', (t)->
		t.plan 1

		desired_output = '<meta content="My name" name="author"></meta>'

		actual_output = meta.author('My name').outerHTML

		t.deepEqual actual_output, desired_output
