function distanceBetweenPoints (p1, p2, name) {
  return Math.abs(Math.sqrt((p1[name.y] - p2[name.y]) * (p1[name.y] - p2[name.y]) + (p1[name.x] - p2[name.x]) * (p1[name.x] - p2[name.x])))
}

function sortByDistance (origin, points, opts = {}) {
  if (!origin || !points || !Array.isArray(points)) {
    return new Error('An origin and array points must be provided')
  }

  const names = {
    y: opts.yName || 'y',
    x: opts.xName || 'x'
  }

  const newPoints = JSON.parse(JSON.stringify(points))

  newPoints.sort(function (a, b) {
    a.distance = distanceBetweenPoints(origin, a, names)
    b.distance = distanceBetweenPoints(origin, b, names)

    return a.distance - b.distance
  })

  return newPoints
}

module.exports = sortByDistance
