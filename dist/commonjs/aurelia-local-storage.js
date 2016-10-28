'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorageProvider = exports.LocalStorageProvider = function () {
  function LocalStorageProvider() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, LocalStorageProvider);

    this.prefix = prefix;
  }

  LocalStorageProvider.prototype.setPrefix = function setPrefix() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    this.prefix = prefix + '.';
  };

  LocalStorageProvider.prototype.get = function get(name) {
    return localStorage.getItem(this.prefix + name);
  };

  LocalStorageProvider.prototype.set = function set(name, value) {
    localStorage.setItem(this.prefix + name, value);
  };

  return LocalStorageProvider;
}();