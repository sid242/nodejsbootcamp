const chalk = require("chalk");
// console.log(chalk.red("false"));
// console.log(chalk.green.underline.inverse("true"));

const validator = require("validator");
const res = validator.isEmail("sidkhooni.c.om");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));