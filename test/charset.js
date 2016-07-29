// Generated by CoffeeScript 1.10.0
(function() {
  var h, meta, tape;

  h = require('hyperscript');

  tape = require('tape');

  meta = require('../')(h);

  tape('meta charset tag', function(t) {
    var actual_output, desired_output;
    t.plan(1);
    desired_output = '<meta charset="utf-8"></meta>';
    actual_output = meta.charset().outerHTML;
    return t.deepEqual(actual_output, desired_output);
  });

}).call(this);