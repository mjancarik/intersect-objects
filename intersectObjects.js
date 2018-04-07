Object.defineProperty(exports, '__esModule', {
  value: true
})

const DEV = 'development'
const ENV = process && process.env ? process.env.NODE_ENV : DEV

/**
 * @param {...Object.<string, *>} rest
 * @return {Object.<string, *>}
 */
function intersectObjects(...rest) {
  if (ENV === DEV) {
    rest.forEach(object => {
      if (!object || typeof object !== 'object') {
        throw new TypeError(
          `You are calling intersectObjects with ${rest
            .map(object => `${object}`)
            .join(', ')}. It only accepts objects.`
        )
      }
    })
  }
  const objectsKeys = rest.map(object => Object.keys(object))

  const intersectedKeys = (objectsKeys[0] || []).filter(key => {
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
