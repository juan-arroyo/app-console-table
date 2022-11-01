const argv = require("yargs")

	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: `Base of multiplication`
	})

	.option("l", {
		alias: "list",
		type: "boolean",
		default: false,
		describe: `Show table in console`
	})

	.option("e", {
		alias: "expo",
		type: "number",
		default: 10,
		describe: `Exponential of multiplication`
	})
	
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw "The base has to need be a number";
		}
		return true;
	}).argv;

module.exports = argv;
