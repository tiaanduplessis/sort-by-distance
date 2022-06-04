import get from "get-value";
import { CoordNaming, Item } from "./types";

function getDistanceY(p1: Item, p2: Item, name: CoordNaming) {
	return (
		(get(p1, name.y) - get(p2, name.y)) * (get(p1, name.y) - get(p2, name.y))
	);
}

function getDistanceX(p1: Item, p2: Item, name: CoordNaming) {
	return (
		(get(p1, name.x) - get(p2, name.x)) * (get(p1, name.x) - get(p2, name.x))
	);
}

export const linearDistance = (p1: Item, p2: Item, name: CoordNaming) =>
	Math.abs(Math.sqrt(getDistanceY(p1, p2, name) + getDistanceX(p1, p2, name)));
