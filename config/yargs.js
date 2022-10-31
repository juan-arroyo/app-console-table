const argv = require("yargs")

	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: `Base number of multiplication table`
	})

	.option("l", {
		alias: "list",
		type: "boolean",
		default: false,
		describe: `Show table result in console`
	})

	.option("e", {
		alias: "expo",
		type: "number",
		default: 10,
		describe: `Exponential number of multiplication table`
	})
	
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw "The base has to need be a number";
		}
		return true;
	}).argv;

module.exports = argv;
