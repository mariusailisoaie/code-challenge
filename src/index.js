const { getColor } = require('./apiMock');

async function getColors(green, blue, red, order, callback) {
	const colors = [];
	if (green) colors[order.indexOf('green')] = getColor('green');
	if (blue) colors[order.indexOf('blue')] = getColor('blue');
	if (red) colors[order.indexOf('red')] = getColor('red');
	callback(colors);
	return colors;
}

function colors() {
	let green = process.argv[2];;
	let blue = process.argv[3]
	let red = process.argv[4];
	const colorOrder = process.argv[5]
	getColors(green, blue, red, JSON.parse(colorOrder), async function (colors) {
		colors = await Promise.all(colors)
		colors.forEach(color => console.log(`${ color.name } ${ color.HEX } rgb(${ color.RGB.R }, ${ color.RGB.G }, ${ color.RGB.B })`));
	});
}

colors()
