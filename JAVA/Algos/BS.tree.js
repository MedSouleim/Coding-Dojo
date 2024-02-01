class BST {
    constructor(){
        this.current = null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function insert(current, value) {
    if (current === null) {
        return new Node(value);
    } else {
        if (value < current.value) {
            current.left = insert(current.left, value);
        } else {
            current.right = insert(current.right, value);
        }
    }
    return current;
}
const keys = [8, 3, 10, 1, 6, 14, 4, 7, 13];

function getMin(current) {
    let current = current;
    while (current.left !== null) {
        current = current.left;
    }
    return current.value;
}

function getMax(current) {
    let current = current;
    while (current.right !== null) {
        current = current.right;
    }
    return current.value;
}


function find(current, value) {
    if (current === null || current.value === value) {
        return current;
    }

    if (value < current.value) {
        return find(current.left, value);
    } else {
        return find(current.right, value);
    }
}


const bst = new BST();

keys.forEach((key) => {
    bst.current = insert(bst.current, key);
});

console.log("Min value in the BST is", getMin(bst.current));
console.log("Max value in the BST is", getMax(bst.current));
