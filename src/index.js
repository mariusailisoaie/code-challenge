const { getColor } = require('./apiMock');

function getColors(green, blue, red, black, white, order, callback) {
	const colors = [];
	if (green) colors[order.indexOf('green')] = getColor('green');
	if (blue) colors[order.indexOf('blue')] = getColor('blue');
	if (red) colors[order.indexOf('red')] = getColor('red');
	if (black) colors[order.indexOf('black')] = getColor('black');
	if (white) colors[order.indexOf('white')] = getColor('white');
	callback(colors);
	return colors;
}

function colors() {
	let black, white;

	if (process.argv.indexOf('black') !== -1) black = process.argv.indexOf('black');
	if (process.argv.indexOf('white') !== -1) white = process.argv.indexOf('white');

	let green = process.argv.indexOf('green');
	let blue = process.argv.indexOf('blue');
	let red = process.argv.indexOf('red');
	const colorOrder = process.argv[process.argv.length - 1];
	getColors(green, blue, red, black, white, JSON.parse(colorOrder), async function (colors) {
		colors = await Promise.all(colors)
		colors.forEach(color => console.log(`${ color.name } ${ color.HEX } rgb(${ color.RGB.R }, ${ color.RGB.G }, ${ color.RGB.B })`));
	});
}

colors()
