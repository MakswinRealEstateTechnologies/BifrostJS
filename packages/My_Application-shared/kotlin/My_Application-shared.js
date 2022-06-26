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
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Greeting(asd, b) {
    this.asd = asd;
    this.b = b;
  }
  Greeting.prototype.helloWorld = function () {
    print('TEST SASASA');
  };
  Greeting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Greeting',
    interfaces: []
  };
  Greeting.prototype.component1 = function () {
    return this.asd;
  };
  Greeting.prototype.component2 = function () {
    return this.b;
  };
  Greeting.prototype.copy = function (asd, b) {
    return new Greeting(asd === void 0 ? this.asd : asd, b === void 0 ? this.b : b);
  };
  Greeting.prototype.toString = function () {
    return 'Greeting(asd=' + Kotlin.toString(this.asd) + (', b=' + Kotlin.toString(this.b)) + ')';
  };
  Greeting.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.asd) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    return result;
  };
  Greeting.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.asd, other.asd) && Kotlin.equals(this.b, other.b)))));
  };
  function GreetingAlkin(asd, b) {
    this.asd = asd;
    this.b = b;
  }
  GreetingAlkin.prototype.helloWorld = function () {
    print('TEST BBBBB');
  };
  GreetingAlkin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GreetingAlkin',
    interfaces: []
  };
  GreetingAlkin.prototype.component1 = function () {
    return this.asd;
  };
  GreetingAlkin.prototype.component2 = function () {
    return this.b;
  };
  GreetingAlkin.prototype.copy = function (asd, b) {
    return new GreetingAlkin(asd === void 0 ? this.asd : asd, b === void 0 ? this.b : b);
  };
  GreetingAlkin.prototype.toString = function () {
    return 'GreetingAlkin(asd=' + Kotlin.toString(this.asd) + (', b=' + Kotlin.toString(this.b)) + ')';
  };
  GreetingAlkin.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.asd) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    return result;
  };
  GreetingAlkin.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.asd, other.asd) && Kotlin.equals(this.b, other.b)))));
  };
  function TestClass(title) {
    this.title = title;
  }
  TestClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestClass',
    interfaces: []
  };
  TestClass.prototype.component1 = function () {
    return this.title;
  };
  TestClass.prototype.copy = function (title) {
    return new TestClass(title === void 0 ? this.title : title);
  };
  TestClass.prototype.toString = function () {
    return 'TestClass(title=' + Kotlin.toString(this.title) + ')';
  };
  TestClass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  TestClass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.title, other.title))));
  };
  var package$com = _.com || (_.com = {});
  var package$makswin = package$com.makswin || (package$com.makswin = {});
  var package$myapplication = package$makswin.myapplication || (package$makswin.myapplication = {});
  package$myapplication.Greeting = Greeting;
  package$myapplication.GreetingAlkin = GreetingAlkin;
  package$myapplication.TestClass = TestClass;
  Kotlin.defineModule('My_Application-shared', _);
  return _;
}));

//# sourceMappingURL=My_Application-shared.js.map
