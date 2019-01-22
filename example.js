const sortByDistance = require('sort-by-distance')

const points = [
  { longitude: 3, latitude: 5 },
  { longitude: 80, latitude: 34 },
  { longitude: 3, latitude: 7 },
  { longitude: 22, latitude: 88 },
  { longitude: 100, latitude: 60 }
]

const opts = {
  yName: 'latitude',
  xName: 'longitude'
}

const origin = { longitude: 4, latitude: 22 }

console.log(sortByDistance(origin, points, opts))
