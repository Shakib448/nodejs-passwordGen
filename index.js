const program = require("commander");
const chalk = require("chalk");
const createPassword = require("./utils/createPassword");

program.version("1.0.0").description("Simple Password generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password

const generatedPassword = createPassword(length, numbers, symbols);

console.log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
