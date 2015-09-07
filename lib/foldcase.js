"use strict";
var mappings = {
  0x0041: 0x0061,
  0x0042: 0x0062
};
function foldcase(string) {
  var result = "";
  var $__5 = true;
  var $__6 = false;
  var $__7 = undefined;
  try {
    for (var $__3 = void 0,
        $__2 = (string)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
      char = $__3.value;
      {
        var codePoint = char.codePointAt(0);
        result += String.fromCodePoint(mappings[codePoint] || codePoint);
      }
    }
  } catch ($__8) {
    $__6 = true;
    $__7 = $__8;
  } finally {
    try {
      if (!$__5 && $__2.return != null) {
        $__2.return();
      }
    } finally {
      if ($__6) {
        throw $__7;
      }
    }
  }
}
var $__default = foldcase;
;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
