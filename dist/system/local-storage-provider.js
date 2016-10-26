'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var LocalStorageProivder;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('LocalStorageProivder', LocalStorageProivder = function () {
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
      }());

      _export('LocalStorageProivder', LocalStorageProivder);
    }
  };
});