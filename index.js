const program = require("commander");

program.version("1.0.0").description("Simple Password generator");

program.option("-l", "--length <length>", "length of password").parse();
