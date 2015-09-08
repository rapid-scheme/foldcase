"use strict";
var $__mappings__;
var mappings = ($__mappings__ = require("./mappings"), $__mappings__ && $__mappings__.__esModule && $__mappings__ || {default: $__mappings__}).mappings;
function foldcase(string) {
  var result = "";
  var $__6 = true;
  var $__7 = false;
  var $__8 = undefined;
  try {
    for (var $__4 = void 0,
        $__3 = (string)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
      var char = $__4.value;
      {
        var codePoint = char.codePointAt(0);
        result += String.fromCodePoint(mappings[codePoint] || codePoint);
      }
    }
  } catch ($__9) {
    $__7 = true;
    $__8 = $__9;
  } finally {
    try {
      if (!$__6 && $__3.return != null) {
        $__3.return();
      }
    } finally {
      if ($__7) {
        throw $__8;
      }
    }
  }
  return result;
}
var $__default = foldcase;
;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
