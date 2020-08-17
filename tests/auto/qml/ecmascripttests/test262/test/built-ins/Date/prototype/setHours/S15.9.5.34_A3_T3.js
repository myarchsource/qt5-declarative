// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.setHours property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
esid: sec-date.prototype.sethours
es5id: 15.9.5.34_A3_T3
description: Checking DontEnum attribute
---*/

if (Date.prototype.setHours.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.setHours.length property has the attribute DontEnum');
}

for (var x in Date.prototype.setHours) {
  if (x === "length") {
    $ERROR('#2: The Date.prototype.setHours.length has the attribute DontEnum');
  }
}
