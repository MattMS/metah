# So metah!

Functions to create common HTML meta tags.

Requires [HyperScript](https://github.com/dominictarr/hyperscript) or similar API to create the tags.


## Usage

	h = require('hyperscript')

	meta = require('metah')(h)

	console.log(meta.charset().outerHTML)
	// <meta charset="utf-8"></meta>
