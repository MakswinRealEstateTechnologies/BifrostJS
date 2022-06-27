//region block: polyfills
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
//endregion
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlin-stdlib-js-ir'] = factory(typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined' ? {} : this['kotlin-kotlin-stdlib-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  //endregion
  //region block: pre-declaration
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  //endregion
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = objectMeta('Unit');
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function asDynamic(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function unsafeCastDynamic(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        {
          tmp$ret$0 = str;
        }
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = instance;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function classMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('class', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  function createMetadata(kind, name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return {kind: kind, simpleName: name, interfaceId: kind === 'interface' ? -1 : undefined, interfaces: interfaces || [], associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, fastPrototype: fastPrototype, $kClass$: undefined, interfacesCache: {isComplete: fastPrototype === undefined && (interfaces === undefined || interfaces.length === 0), implementInterfaceMemo: {}}};
  }
  function objectMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('object', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = classMeta('Exception', undefined, undefined, undefined, undefined, Error.prototype);
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = classMeta('RuntimeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = classMeta('ClassCastException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = classMeta;
  _.$_$.b = getStringHashCode;
  _.$_$.c = THROW_CCE;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-stdlib-js-ir.js.map