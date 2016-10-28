'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var LocalStorageProvider;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('LocalStorageProvider', LocalStorageProvider = function () {
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
      }());

      _export('LocalStorageProvider', LocalStorageProvider);
    }
  };
});