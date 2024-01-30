class BST {
    constructor(){
        this.root = null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// function insert(root, value) {
//     if (root === null) {
//         return new Node(value);
//     } else {
//         if (value < root.value) {
//             root.left = insert(root.left, value);
//         } else {
//             root.right = insert(root.right, value);
//         }
//     }
//     return root;
// }
const keys = [8, 3, 10, 1, 6, 14, 4, 7, 13];

function getMin(root) {
    let current = root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.value;
}

function getMax(root) {
    let current = root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.value;
}


// const bst = new BST();

// keys.forEach((key) => {
//     bst.root = insert(bst.root, key);
// });

console.log("Min value in the BST is", getMin(bst.root));
console.log("Max value in the BST is", getMax(bst.root));
