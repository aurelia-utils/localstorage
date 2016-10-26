'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorageProivder = exports.LocalStorageProivder = function () {
  function LocalStorageProivder() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, LocalStorageProivder);

    this.prefix = prefix;
  }

  LocalStorageProivder.prototype.setPrefix = function setPrefix() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    this.prefix = prefix + '.';
  };

  LocalStorageProivder.prototype.get = function get(name) {
    return localStorage.getItem(this.prefix + name);
  };

  LocalStorageProivder.prototype.set = function set(name, value) {
    localStorage.setItem(this.prefix + name, value);
  };

  return LocalStorageProivder;
}();