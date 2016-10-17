# Test linked script tag

## Library imports

	h = require 'hyperscript'

	tape = require 'tape'


## Relative imports

	meta = require('../main')(h)


## Run tests

	tape 'link tag to CSS', (t)->
		t.plan 1

		desired_output = '<link href="./style.css" rel="stylesheet" type="text/css"></link>'

		actual_output = meta.link_css('./style.css').outerHTML

		t.deepEqual actual_output, desired_output
