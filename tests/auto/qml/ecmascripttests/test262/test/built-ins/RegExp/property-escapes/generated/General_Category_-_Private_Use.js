// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Private_Use`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00E000, 0x00F8FF],
    [0x0F0000, 0x0FFFFD],
    [0x100000, 0x10FFFD]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Private_Use}+$/u,
  matchSymbols,
  "\\p{General_Category=Private_Use}"
);
testPropertyEscapes(
  /^\p{General_Category=Co}+$/u,
  matchSymbols,
  "\\p{General_Category=Co}"
);
testPropertyEscapes(
  /^\p{gc=Private_Use}+$/u,
  matchSymbols,
  "\\p{gc=Private_Use}"
);
testPropertyEscapes(
  /^\p{gc=Co}+$/u,
  matchSymbols,
  "\\p{gc=Co}"
);
testPropertyEscapes(
  /^\p{Private_Use}+$/u,
  matchSymbols,
  "\\p{Private_Use}"
);
testPropertyEscapes(
  /^\p{Co}+$/u,
  matchSymbols,
  "\\p{Co}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00F900, 0x0EFFFF],
    [0x0FFFFE, 0x0FFFFF],
    [0x10FFFE, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Private_Use}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Private_Use}"
);
testPropertyEscapes(
  /^\P{General_Category=Co}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Co}"
);
testPropertyEscapes(
  /^\P{gc=Private_Use}+$/u,
  nonMatchSymbols,
  "\\P{gc=Private_Use}"
);
testPropertyEscapes(
  /^\P{gc=Co}+$/u,
  nonMatchSymbols,
  "\\P{gc=Co}"
);
testPropertyEscapes(
  /^\P{Private_Use}+$/u,
  nonMatchSymbols,
  "\\P{Private_Use}"
);
testPropertyEscapes(
  /^\P{Co}+$/u,
  nonMatchSymbols,
  "\\P{Co}"
);
