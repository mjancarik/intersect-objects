import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { intersectObjects } from '../index.mjs';

describe('intersectObjects method', () => {
  const object1 = { a: 'a', b: 'b', c: 'c' };
  const object2 = { a: 'a', b: 'x' };
  const intersection = { a: 'a', b: 'x' };

  it('should return same object for one', () => {
    assert.deepEqual(intersectObjects(object1), object1);
  });

  it('should return intersection', () => {
    assert.deepEqual(intersectObjects(object1, object2), intersection);
  });

  it('should return empty object for calling without arguments', () => {
    assert.deepEqual(intersectObjects(), {});
  });

  it('should throwing TypeErrro for calling with undefined', () => {
    assert.throws(() => intersectObjects(undefined), { name: /^TypeError$/ });
  });

  it('should throwing TypeError for calling with null', () => {
    assert.throws(() => intersectObjects({}, null), { name: /^TypeError$/ });
  });
});
