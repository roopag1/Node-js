// const Person = require('./person');


// const pers = new Person('Roopa', 23,'female');
// pers.welcome();


const Logger = require('./logger')

const logger = new Logger();

logger.on('message', (data) => console.log('called listerner',data));

logger.log('hello world');

