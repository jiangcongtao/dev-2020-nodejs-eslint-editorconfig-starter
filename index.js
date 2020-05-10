const { method1, method2 } = require('./lib');

method1('Nick');
method2('Jiang');

const name = 'Nick';
const person = {
  first: name,
};
console.log(person);
console.log('Node.JS with ESlint setup');

// eslint-disable-next-line no-unused-vars
const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};
