const deg2rad = (deg: number) => {
	return deg * (Math.PI / 180);
};
const square = (x: number) => {
	return Math.pow(x, 2);
};

export const haversineDistance = (
	lat1: number,
	lng1: number,
	lat2: number,
	lng2: number
) => {
	const r = 6371; // radius of the earth in km
	lat1 = deg2rad(lat1);
	lat2 = deg2rad(lat2);
	const lat_dif = lat2 - lat1;
	const lng_dif = deg2rad(lng2 - lng1);
	const a =
		square(Math.sin(lat_dif / 2)) +
		Math.cos(lat1) * Math.cos(lat2) * square(Math.sin(lng_dif / 2));
	const d = 2 * r * Math.asin(Math.sqrt(a));

	return Math.round((d + Number.EPSILON) * 100) / 100;
};
