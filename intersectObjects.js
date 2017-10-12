Object.defineProperty(exports, '__esModule', {
  value: true
})

function intersectObjects(...rest) {
  const objectsKeys = rest.map(object => Object.keys(object))

  const intersectedKeys = objectsKeys[0].filter(key => {
    return objectsKeys.reduce((isKeyExist, keys) => {
      return isKeyExist && keys.indexOf(key) !== -1
    }, true)
  })

  return intersectedKeys.reduce((intersectedObject, key) => {
    intersectedObject[key] = rest[rest.length - 1][key]

    return intersectedObject
  }, {})
}

exports.default = intersectObjects
exports.intersectObjects = intersectObjects
