# Test title tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../main')(h)


## Run tests

	tape 'title tag', (t)->
		t.plan 1

		desired_output = '<title>My title</title>'

		actual_output = meta.title('My title').outerHTML

		t.deepEqual actual_output, desired_output
