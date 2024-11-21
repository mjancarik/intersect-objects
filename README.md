# intersect-objects

The intersect-objects module help you with creating object intersection.

## Installation

You can add the intersect-objects to your project.

```
npm i intersect-objects
```

## Usage

```javascript
import { intersectObjects } from 'intersect-objects';

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
