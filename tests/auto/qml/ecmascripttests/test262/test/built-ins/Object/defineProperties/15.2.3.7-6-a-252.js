// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-252
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property that already exists on 'O' is data property and
    'desc' is data descriptor, test updating the [[Configurable]]
    attribute value of 'P'  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arr = [12];

Object.defineProperties(arr, {
  "0": {
    configurable: false
  }
});
verifyEqualTo(arr, "0", 12);

verifyWritable(arr, "0");

verifyEnumerable(arr, "0");

verifyNotConfigurable(arr, "0");
