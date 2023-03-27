(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('cowsay')) :
  typeof define === 'function' && define.amd ? define(['cowsay'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.cowsay));
})(this, (function (cowsay) { 'use strict';

  const add = (a, b) => a + b;

  console.log(add(10, 32));

  console.log(
    cowsay.say({
      text: "I'm a moooodule",
      e: "-O",
      T: "U ",
    })
  );

  const alma = "piros";
  console.log(alma);

}));
