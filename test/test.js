import foldcase from '../src/foldcase';

const assert = require("assert");

describe('run', () => {
  it('should case-fold characters', () => {
    assert.equal(foldcase('AB'), 'ab');
  });

  it('should not fold everything', () => {
    assert.equal(foldcase('+'), '+');
  });

  it('should handle astral symbols', () => {
    assert.equal(foldcase('-\u{10C80}-'), '-\u{10CC0}-');
  });
});