import get from "get-value";
import { haversineDistance } from "./haversine-distance";
import { linearDistance } from "./linear-distance";
import { CoordNaming, FormulaType, Item } from "./types";

const distanceBetweenPoints = (
	p1: Item,
	p2: Item,
	name: CoordNaming,
	type: FormulaType = "linear"
) => {
	if (type === "haversine") {
		return haversineDistance(
			get(p1, name.x),
			get(p1, name.y),
			get(p2, name.x),
			get(p2, name.y)
		);
	}

	// Linear is default
	return linearDistance(p1, p2, name);
};

export type SortByDistanceOptions = {
	yName?: string;
	xName?: string;
	type?: FormulaType;
};

export const sortByDistance = (
	origin: Item,
	points: Item[],
	{ yName = "y", xName = "x", type = "linear" }: SortByDistanceOptions = {}
) => {
	const names = {
		y: yName,
		x: xName,
	};

	const newPoints = points.slice();

	newPoints.sort(function (a, b) {
		a.distance = distanceBetweenPoints(origin, a, names, type);
		b.distance = distanceBetweenPoints(origin, b, names, type);
		return a.distance - b.distance;
	});

	return newPoints;
};

export default sortByDistance;
