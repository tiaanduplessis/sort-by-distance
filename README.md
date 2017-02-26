<h1 align="center">🚶 sort-by-distance</h1>
<div align="center">
  <strong>Sort array of points based on how close they are to a givin point</strong>
</div>
<br>
<div align="center">
    <a href="https://npmjs.org/package/sort-by-distance">
      <img src="https://img.shields.io/npm/v/sort-by-distance.svg?style=flat-square" alt="NPM version" />
    </a>
    <a href="https://npmjs.org/package/sort-by-distance">
    <img src="https://img.shields.io/npm/dm/sort-by-distance.svg?style=flat-square" alt="Downloads" />
    </a>
    <a href="https://github.com/feross/standard">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
    </a>
    <a href="https://travis-ci.org/tiaanduplessis/sort-by-distance">
      <img src="https://img.shields.io/travis/tiaanduplessis/sort-by-distance/master.svg?style=flat-square" alt="Travis Build" />
    </a>
    <a href="https://github.com/RichardLitt/standard-readme)">
      <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
    </a>
    <a href="https://badge.fury.io/gh/tiaanduplessis%2Fsort-by-distance">
      <img src="https://badge.fury.io/gh/tiaanduplessis%2Fsort-by-distance.svg?style=flat-square" alt="GitHub version" />
   </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaanduplessis.co.za">Tiaan</a> and <a href="https://github.com/tiaanduplessis/sort-by-distance/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>


## Install

```sh
$ npm install --save sort-by-distance
```

```sh
$ yarn add sort-by-distance
```

## Usage

Call the function providing the `origin` point and an array of other points as arguments:

```js
const sortByDistance = require('sort-by-distance')

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
const sortByDistance = require('sort-by-distance')

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
}

```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
