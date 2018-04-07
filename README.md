# intersect-objects

[![Build Status](https://travis-ci.org/mjancarik/intersect-objects.svg?branch=master)](https://travis-ci.org/mjancarik/intersect-objects) [![Dependency Status](https://david-dm.org/mjancarik/intersect-objects.svg)](https://david-dm.org/mjancarik/intersect-objects) [![Coverage Status](https://coveralls.io/repos/github/mjancarik/intersect-objects/badge.svg?branch=master)](https://coveralls.io/github/mjancarik/intersect-objects?branch=master)

The intersect-objects module help you with creating object intersection.

## Installation

You can add the intersect-objects to your project.

```
npm i intersect-objects
```

## Usage

```javascript
import intersectObjects from 'intersect-objects';

const object1 = { a: 'a', b: 'b', c: 'c' }
const object2 = { a: 'a', b: 'x' }

intersectObjects(object1, object2) // { a: 'a', b: 'x' }
// intersectObjects(...spread)

intersectObjects() // {}

intersectObjects(undefined) // TypeError
intersectObjects(null) // TypeError
intersectObjects(false) // TypeError
intersectObjects(1) // TypeError

```
