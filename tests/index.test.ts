import { describe, test, expect } from "vitest";
import { sortByDistance } from "../src";

describe("sort-by-distance", () => {
	test("should export a function", () => {
		expect(typeof sortByDistance).toBe("function");
	});

	test("should sort an array linearly", () => {
		const points = [
			{ x: 3, y: 5 },
			{ x: 80, y: 34 },
			{ x: 3, y: 7 },
			{ x: 22, y: 88 },
			{ x: 100, y: 60 },
		];

		const origin = { x: 50, y: 50 };
		const nearest = { x: 80, y: 34, distance: 34 };
		expect(sortByDistance(origin, points)[0]).toEqual(nearest);
	});

	test("should sort using custom key for x/y", () => {
		const points = [
			{ longitude: 3, latitude: 5 },
			{ longitude: 80, latitude: 34 },
			{ longitude: 3, latitude: 7 },
			{ longitude: 22, latitude: 88 },
			{ longitude: 100, latitude: 60 },
		];

		const opts = {
			yName: "latitude",
			xName: "longitude",
		};

		const origin = { longitude: 4, latitude: 22 };
		const nearest = { longitude: 3, latitude: 7, distance: 15.033296378372908 };
		expect(sortByDistance(origin, points, opts)[0]).toEqual(nearest);
	});

	test("should sort using haversine", () => {
		const points = [
			{ longitude: 3, latitude: 5 },
			{ longitude: 80, latitude: 34 },
			{ longitude: 3, latitude: 7 },
			{ longitude: 22, latitude: 88 },
			{ longitude: 100, latitude: 60 },
		];

		const opts = {
			yName: "latitude",
			xName: "longitude",
			type: "haversine",
		} as const;

		const origin = { longitude: 4, latitude: 22 };
		const nearest = { longitude: 3, latitude: 7, distance: 1668.48 };
		expect(sortByDistance(origin, points, opts)[0]).toEqual(nearest);
	});
});
