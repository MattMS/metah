# So metah!

Functions to create common HTML meta tags.

Requires [HyperScript](https://github.com/dominictarr/hyperscript) or similar API to create the tags.


## Usage

	h = require('hyperscript')

	meta = require('metah')(h)

	console.log(meta.charset().outerHTML)
	// <meta charset="utf-8"></meta>


## Available tags

### author

	meta.author('Matt McKellar-Spence')
	// <meta content="Matt McKellar-Spence" name="author">


### charset

	meta.charset()
	// <meta charset="utf-8">


### description

	meta.description('What it is all about')
	// <meta content="What it is all about" name="description">


### http_equiv

	meta.http_equiv()
	// <meta content="IE=edge" http-equiv="X-UA-Compatible">


### link_css

	meta.link_css('./style.css')
	// <link href="./style.css" rel="stylesheet">


### link_script

	meta.link_script('./script.js')
	// <script src="./script.js" type="text/javascript"></script>


### script

#### Function input

	function body_script () {
		document.addEventListener('DOMContentLoaded', function (event) {
			console.log('Ready.')
		})
	}

	meta.script(body_script)

	/*
	<script type="text/javascript">(function () {
		document.addEventListener('DOMContentLoaded', function (event) {
			console.log('Ready.')
		})
	})()</script>
	*/


#### Text input

	meta.script("document.addEventListener('DOMContentLoaded', function(event) {console.log('Ready.')})")
	// <script type="text/javascript">document.addEventListener('DOMContentLoaded', function(event) {console.log('Ready.')})</script>


### title

	meta.title('My awesome site')
	// <title>My awesome site</title>


### viewport

	meta.viewport()
	// <meta content="width=device-width, initial-scale=1" name="viewport">
