# Test http-equiv tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../')(h)


## Run tests

	tape 'meta http-equiv tag', (t)->
		t.plan 1

		desired_output = '<meta content="IE=edge" http-equiv="X-UA-Compatible"></meta>'

		actual_output = meta.http_equiv().outerHTML

		t.deepEqual actual_output, desired_output
