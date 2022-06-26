(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'My_Application-shared'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'My_Application-shared'.");
    }
    root['My_Application-shared'] = factory(typeof this['My_Application-shared'] === 'undefined' ? {} : this['My_Application-shared'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
}));

//# sourceMappingURL=My_Application-shared.js.map
