# Test meta charset tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../')(h)


## Run tests

	tape 'meta charset tag', (t)->
		t.plan 1

		desired_output = '<meta charset="utf-8"></meta>'

		actual_output = meta.charset().outerHTML

		t.deepEqual actual_output, desired_output
