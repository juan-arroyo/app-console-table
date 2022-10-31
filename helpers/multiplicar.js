const fs = require("fs");
const colors = require("colors");

const createFile = async (base = 5, list = false, expo = 10) => {
	try {

		let out = "";
		let out_console = "";

		for ( let i = 1; i <= expo; i++ ) {
			out += `${ base } X ${ i } = ${ base * i }\n`;
			out_console += `${ base } ${ "X".green} ${ i } ${ "=".green } ${ base * i }\n`;
		}

		if (list) {
			console.log("=================================".green);
			console.log("Table base :".underline.green, colors.green(base));
			console.log("=================================".green);
			console.log(out_console);
		}
		

		fs.writeFileSync(`./out/table-${base}.txt`, out);

		return `table-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	createFile: createFile,
};
