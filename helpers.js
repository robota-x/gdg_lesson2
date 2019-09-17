const chalk = require("chalk");

const sayHi = name => console.log(`hello ${name}`);

const sayGoodbye = name => console.log(`it is now ${new Date()} and time to say goodbye, ${chalk.blue(name)}`)

exports.sayHi = sayHi;
exports.sayGoodbye = sayGoodbye;
