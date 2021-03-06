// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
es5id: 15.4.4.14-3-15
description: >
    Array.prototype.indexOf - 'length' is a string containing an
    exponential number
---*/

var obj = {
  1: true,
  2: "2E0",
  length: "2E0"
};

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(obj, "2E0"), -1, 'Array.prototype.indexOf.call(obj, "2E0")');
