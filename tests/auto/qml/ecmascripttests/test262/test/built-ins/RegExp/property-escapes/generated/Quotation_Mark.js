// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Quotation_Mark`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000022,
    0x000027,
    0x0000AB,
    0x0000BB,
    0x002E42,
    0x00FF02,
    0x00FF07
  ],
  ranges: [
    [0x002018, 0x00201F],
    [0x002039, 0x00203A],
    [0x00300C, 0x00300F],
    [0x00301D, 0x00301F],
    [0x00FE41, 0x00FE44],
    [0x00FF62, 0x00FF63]
  ]
});
testPropertyEscapes(
  /^\p{Quotation_Mark}+$/u,
  matchSymbols,
  "\\p{Quotation_Mark}"
);
testPropertyEscapes(
  /^\p{QMark}+$/u,
  matchSymbols,
  "\\p{QMark}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000021],
    [0x000023, 0x000026],
    [0x000028, 0x0000AA],
    [0x0000AC, 0x0000BA],
    [0x0000BC, 0x002017],
    [0x002020, 0x002038],
    [0x00203B, 0x002E41],
    [0x002E43, 0x00300B],
    [0x003010, 0x00301C],
    [0x003020, 0x00DBFF],
    [0x00E000, 0x00FE40],
    [0x00FE45, 0x00FF01],
    [0x00FF03, 0x00FF06],
    [0x00FF08, 0x00FF61],
    [0x00FF64, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Quotation_Mark}+$/u,
  nonMatchSymbols,
  "\\P{Quotation_Mark}"
);
testPropertyEscapes(
  /^\P{QMark}+$/u,
  nonMatchSymbols,
  "\\P{QMark}"
);
