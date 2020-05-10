function method1(name) {
  this.name = name; // this: global object in node.js

  console.log(this);
}

const method2 = (name) => {
  this.name = name; // this: Object {}

  console.log(this);
};

module.exports = { method1, method2 };
