(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'My_Application-shared'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'My_Application-shared'.");
    }
    root['My_Application-shared'] = factory(typeof this['My_Application-shared'] === 'undefined' ? {} : this['My_Application-shared'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var getStringHashCode = kotlin_kotlin.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.c;
  var classMeta = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function Student(name) {
    this.c_1 = name;
  }
  Student.prototype.d = function () {
    return this.c_1;
  };
  Student.prototype.component1 = function () {
    return this.c_1;
  };
  Student.prototype.copy = function (name) {
    return this.e(name === void 1 ? this.c_1 : name);
  };
  Student.prototype.e = function (name) {
    return new Student(name);
  };
  Student.prototype.f = function (name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.c_1;
    return this.e(name);
  };
  Student.prototype.toString = function () {
    return 'Student(name=' + this.c_1 + ')';
  };
  Student.prototype.hashCode = function () {
    return getStringHashCode(this.c_1);
  };
  Student.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Student))
      return false;
    var tmp0_other_with_cast = other instanceof Student ? other : THROW_CCE();
    if (!(this.c_1 === tmp0_other_with_cast.c_1))
      return false;
    return true;
  };
  Student.$metadata$ = classMeta('Student');
  Object.defineProperty(Student.prototype, 'name', {
    configurable: true,
    get: Student.prototype.d
  });
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$makswin = $com.makswin || ($com.makswin = {});
    var $com$makswin$myapplication = $com$makswin.myapplication || ($com$makswin.myapplication = {});
    $com$makswin$myapplication.Student = Student;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=My_Application-shared.js.map