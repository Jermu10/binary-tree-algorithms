class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITTERATIVE
// const treeMinValue = (root) => {
//   let smallest = Infinity;
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.val < smallest) smallest = current.val;

//     if (current.left !== null) stack.push(current.left);
//     if (current.right !== null) stack.push(current.right);
//   }
//   return smallest;
// };

// const treeMinValue = (root) => {
//   let smallest = Infinity;
//   const queue = [root];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current.val < smallest) smallest = current.val;

//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }
//   return smallest;
// };

// RECURSIVE
const treeMinValue = (root) => {
  if (root === null) return Infinity;
  const leftMin = treeMinValue(root.left);
  const rightMin = treeMinValue(root.right);

  return Math.min(root.val, leftMin, rightMin);
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(-4);
const e = new Node(5);
const f = new Node(6);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      1
//     / \
//    2   3
//   / \   \
//  -4   5   6

console.log(treeMinValue(a)); // -4
