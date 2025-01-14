class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//  ITTERATIVE SOLUTION
// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   const result = [];
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return result;
// };

// RECURSIVE SOLUTION
// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   const leftValues = depthFirstValues(root.left);
//   const righValues = depthFirstValues(root.right);

//   return [root.val, ...leftValues, ...righValues];
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

console.log(depthFirstValues(a));
