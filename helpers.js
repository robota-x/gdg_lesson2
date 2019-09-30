const chalk = require("chalk");

const colorList = [
    'red',
    'blue',
    'yellow',
    'green',
    'whiteBright',
    'cyan'
]

const pickRandomColor = () => colorList[Math.floor(Math.random() * colorList.length)];

const sayHi = name => console.log(`hello ${name}`);

const sayGoodbye = name => console.log(`it is now ${new Date()} and time to say goodbye, ${chalk[pickRandomColor()](name)}`)

exports.sayHi = sayHi;
exports.sayGoodbye = sayGoodbye;
