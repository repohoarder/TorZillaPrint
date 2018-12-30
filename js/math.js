/* TABLE: Math */

// code courtesy of https://fpcentral.tbb.torproject.org/fp under the following license

/***
The MIT License (MIT)

Copyright (c) 2016 Pierre Laperdrix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***/

'use strict';

let x; let y;

x = 1;
dom.math1.val = x === -Infinity ? x : Math.log(x + Math.sqrt(x * x + 1));

x = 1e300;
dom.math2.val = Math.log(x + Math.sqrt(x * x - 1));

x = 0.5;
dom.math3.val = Math.log((1 + x) / (1 - x)) / 2;

x = 1;
dom.math4.val = Math.exp(x) - 1;

x = 100;
y = Math.pow(Math.abs(x), 1 / 3);
dom.math5.val = x < 0 ? -y : y;

x = 10;
dom.math6.val = Math.log(1 + x);

x = 1;
y = Math.exp(x);
dom.math7.val = (y - 1 / y) / 2;

x = 10;
y = Math.exp(x);
dom.math8.val = (y + 1 / y) / 2;

x = 1;
dom.math9.val = (() => {
    if (x === Infinity) {
        return 1;
    } else if (x === -Infinity) {
        return -1;
    } else {
        const y = Math.exp(2 * x);
        return (y - 1) / (y + 1);
    }
})();