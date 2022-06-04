
# sort-by-distance
[![package version](https://img.shields.io/npm/v/sort-by-distance.svg?style=flat-square)](https://npmjs.org/package/sort-by-distance)
[![package downloads](https://img.shields.io/npm/dm/sort-by-distance.svg?style=flat-square)](https://npmjs.org/package/sort-by-distance)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/sort-by-distance.svg?style=flat-square)](https://npmjs.org/package/sort-by-distance)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Sort array of points based on how close they are to a givin point

## Table of Contents

- [sort-by-distance](#sort-by-distance)
	- [Table of Contents](#table-of-contents)
	- [Install](#install)
	- [Usage](#usage)
	- [API](#api)
		- [originPoint](#originpoint)
		- [arrayOfPoints](#arrayofpoints)
		- [options](#options)
	- [Contributing](#contributing)
	- [License](#license)

## Install

Install the package locally within you project folder with your package manager:

With `npm`:
```sh
npm install sort-by-distance
```

With `yarn`:
```sh
yarn add sort-by-distance
```

With `pnpm`:
```sh
pnpm add sort-by-distance
```

## Usage

Call the function providing the `origin` point and an array of other points as arguments:

```js
import { sortByDistance } from 'sort-by-distance'

const points = [
	{ x: 3, y: 5},
	{ x: 80, y: 34},
	{ x: 3, y: 7},
	{ x: 22, y: 88},
	{ x: 100, y: 60},
]

const origin = { x: 50, y: 50}

console.log(sortByDistance(origin, points))

//[ { x: 80, y: 34, distance: 34 },
//  { x: 22, y: 88, distance: 47.20169488482379 },
//  { x: 100, y: 60, distance: 50.99019513592785 },
//  { x: 3, y: 7, distance: 63.702433234531945 },
//  { x: 3, y: 5, distance: 65.06919393998976 } ]

```

You can also change the name of the `x` and `y`:


```js
import { sortByDistance } from 'sort-by-distance'

const points = [
	{ longitude: 3, latitude: 5},
	{ longitude: 80, latitude: 34},
	{ longitude: 3, latitude: 7},
	{ longitude: 22, latitude: 88},
	{ longitude: 100, latitude: 60},
]

const opts = {
	yName: 'latitude',
	xName: 'longitude'
}

const origin = { longitude: 4, latitude: 22}

console.log(sortByDistance(origin, points, opts))

//[ { longitude: 3, latitude: 7, distance: 15.033296378372908 },
//  { longitude: 3, latitude: 5, distance: 17.029386365926403 },
//  { longitude: 22, latitude: 88, distance: 68.41052550594829 },
//  { longitude: 80, latitude: 34, distance: 76.94153624668537 },
//  { longitude: 100, latitude: 60, distance: 103.24727599312246 } ]

```

The object is cloned and the `distance` from the `origin` point is added as an property of the new object.

## API

The module exports a single function with the signature:
```js
sortByDistance(originPoint, arrayOfPoints, options)
```

### originPoint

Is an object containing `x` and `y` properties.

### arrayOfPoints

Is an array of objects containing `x` and `y` properties.

### options

The options available and their defaults:

```js

{
	yName: 'y', // Name of the y property to look for on the object
	xName: 'x' // Name of the x property to look for on the object
	type: 'linear' // "linear" or "haversine";
}

```

For all configuration options, please see the [API docs](https://paka.dev/npm/sort-by-distance).

## Contributing

Got an idea for a new feature? Found a bug? Contributions are welcome! Please [open up an issue](https://github.com/tiaanduplessis/sort-by-distance/issues) or [make a pull request](https://makeapullrequest.com/).

## License

[MIT © Tiaan du Plessis](./LICENSE)
    