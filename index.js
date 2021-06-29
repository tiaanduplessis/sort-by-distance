const get = require('lodash.get')

function distanceBetweenPoints (p1, p2, name, spheric = false) {
	if(spheric) {
		return distanceBetweenPointsSpheric(
			get(p1, name.x),
			get(p1, name.y),
			get(p2, name.x),
			get(p2, name.y),
			false
		)
	}
  return Math.abs(Math.sqrt(getDistanceY(p1, p2, name) + getDistanceX(p1, p2, name)))
}

function distanceBetweenPointsSpheric(lat1, lng1, lat2, lng2, miles = true) { // miles optional
  if (typeof miles === "undefined"){miles=false;}
  function deg2rad(deg: number){return deg * (Math.PI/180);}
  function square(x: number){return Math.pow(x, 2);}
  var r=6371; // radius of the earth in km
  lat1=deg2rad(lat1);
  lat2=deg2rad(lat2);
  var lat_dif=lat2-lat1;
  var lng_dif=deg2rad(lng2-lng1);
  var a=square(Math.sin(lat_dif/2))+Math.cos(lat1)*Math.cos(lat2)*square(Math.sin(lng_dif/2));
  var d=2*r*Math.asin(Math.sqrt(a));

  var ans = miles ? d * 0.621371 : d;
  return Math.round((ans + Number.EPSILON) * 100) / 100
}

function getDistanceY (p1, p2, name) {
  return (get(p1, name.y) - get(p2, name.y)) * (get(p1, name.y) - get(p2, name.y))
}

function getDistanceX (p1, p2, name) {
  return (get(p1, name.x) - get(p2, name.x)) * (get(p1, name.x) - get(p2, name.x))
}

function sortByDistance (origin, points, opts = {}) {
  if (!origin || !points || !Array.isArray(points)) {
    return new Error('An origin and array points must be provided')
  }

  const names = {
    y: opts.yName || 'y',
    x: opts.xName || 'x'
  }

  const newPoints = points.slice()

  newPoints.sort(function (a, b) {
    a.distance = distanceBetweenPoints(origin, a, names, opts.spheric)
    b.distance = distanceBetweenPoints(origin, b, names, opts.spheric)

    return a.distance - b.distance
  })

  return newPoints
}

module.exports = sortByDistance
