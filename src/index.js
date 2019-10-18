const { getColor } = require('./apiMock');

class Color {
	constructor(name) {
		this.name = name
	}
}

class Green extends Color {
	constructor() {
		super('green');
	}
}

class Blue extends Color {
	constructor() {
		super('blue');
	}
}

class Red extends Color {
	constructor() {
		super('Red');
	}
}

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
		var hexColors = []
		colors.forEach(color => hexColors.push(color.HEX))
		console.log("Red " + hexColors[0], "Green " + hexColors[1]);
	});
}

colors()
