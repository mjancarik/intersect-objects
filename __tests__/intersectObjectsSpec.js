import intersectObjects from '../intersectObjects'

describe('intersectObjects method', () => {
  const object1 = { a: 'a', b: 'b', c: 'c' }
  const object2 = { a: 'a', b: 'x' }
  const intersection = { a: 'a', b: 'x' }

  it('should return same object for one', () => {
    expect(intersectObjects(object1)).toEqual(object1)
  })

  it('should return intersection', () => {
    expect(intersectObjects(object1, object2)).toEqual(intersection)
  })

  it('should return empty object for calling without arguments', () => {
    expect(intersectObjects()).toEqual({})
  })

  it('should throwing TypeErrro for calling with undefined', () => {
    expect(() => intersectObjects(undefined)).toThrow(TypeError)
  })

  it('should throwing TypeError for calling with null', () => {
    expect(() => intersectObjects({}, null)).toThrow(TypeError)
  })
})
