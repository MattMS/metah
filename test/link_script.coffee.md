# Test linked script tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../')(h)


## Run tests

	tape 'script tag with src', (t)->
		t.plan 1

		desired_output = '<script src="./script.js" type="text/javascript"></script>'

		actual_output = meta.link_script('./script.js').outerHTML

		t.deepEqual actual_output, desired_output
