const program = require("commander");

program.version("1.0.0").description("Simple Password generator");

program.option("-l, --length <number>", "length of password").parse();

console.log(program.opts());
