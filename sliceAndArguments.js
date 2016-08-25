var list1 = list(1, 2, 3);

function list() {
  return Array.prototype.slice.call(arguments);
};

console.log(list1); // [1, 2, 3]