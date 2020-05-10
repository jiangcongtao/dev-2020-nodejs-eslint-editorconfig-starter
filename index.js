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

// ================  Experiment ES6 object destructuring feature ==============
/**
 * Greeting to the name.
 *
 * Using destructuring function parameters,with default / optional parameter value,
 * and renaming the parameter name
 *
 * @param {} object with the 'name' property
 */
function greet({ name: paraName = 'congtao' } = {}) {
  console.log(`Hello ${paraName}`);
}

greet(); // call with default parameter {}.  name uses the default value 'congtao'
greet({ name: 'Jiang' });
