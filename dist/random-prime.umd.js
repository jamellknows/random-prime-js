(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["random-prime"] = {}));
})(this, (function (exports) { 'use strict';

    function randomprime() {
      var arr = [];
      var MPI = Math.PI;
      var rand1 = Math.random() * 10000;

      for (var i = 0; i < rand1; i++) {
        var y1 = MPI / 3 * (1 + 6 * i);
        y1 = Math.sqrt(Math.pow(y1 / MPI, 2) - 0.25);
        var y2 = 5 * MPI / 3 * (1 + 6 / 5 * i);
        y2 = Math.sqrt(Math.pow(y2 / MPI, 2) - 0.25);
        arr.push(y1);
        arr.push(y2);
      }

      var prime = [];

      for (var _i = 0; _i < arr.length; _i++) {
        if (Math.floor(arr[_i]) % 2 != 0) {
          arr[_i] = arr[_i] + 1;
        }

        prime.push(Math.floor(arr[_i]) + 1);
        prime.push(Math.floor(arr[_i]) - 1);
      }

      prime = prime.sort(function (a, b) {
        return a - b;
      });
      var rePrime = [];

      for (var _i2 = 0; _i2 < prime.length; _i2++) {
        if (rePrime.indexOf(prime[_i2]) < 0) {
          rePrime.push(prime[_i2]);
        }
      }

      for (var _i3 = 0; _i3 < rePrime.length; _i3++) {
        if (isNaN(rePrime[_i3])) {
          rePrime.splice(_i3, 1);
        }
      }

      return rePrime[rePrime.length - 1];
    }

    exports.randomprime = randomprime;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
