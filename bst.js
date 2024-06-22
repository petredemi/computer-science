class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert a new node in tree
    insertNode(data) {
        if (this.root === null) {
            this.root = new Node(data);
            return;
        }
        let currentChildren = this.root;
        this.findNodeToInsert(data, currentChildren);
    }
    findNodeToInsert(data, parentNode) {
        if (data > parentNode.data) {
            if (parentNode.right) {
                this.findNodeToInsert(data, parentNode.right);
                return;
            }
            parentNode.right = new Node(data);
        }
        else if (data <= parentNode.data) {
            if (parentNode.left) {
                this.findNodeToInsert(data, parentNode.left);
                return;
            }
            parentNode.left = new Node(data);
        }

    }

    // search a node in tree
    contains(data, currentNode = this.root) {
        // using ? operator to safegurad when we hit the null node 

        if (!this.root) return null;

        if (data === currentNode?.data) {
            console.log('Contains', currentNode)
            return currentNode;
        }

        if (data > currentNode?.data) {
            this.contains(data, currentNode?.right);
        } else if (data < currentNode?.data) {
            this.contains(data, currentNode?.left)
        } else {
            console.log("Node dosen't contain to this tree");
            return null;
        }
    }

    // print binary tree 
    printTreeInOrder(currentNode = this.root) {
        if (!this.root || !currentNode) return;
        this.printTreeInOrder(currentNode?.left)
        console.log(currentNode.data);
       this.printTreeInOrder(currentNode?.right);
    }
    printTreePreOrder(currentNode = this.root) {
        if (!this.root || !currentNode) return;
        console.log(currentNode.data);
        this.printTreeInOrder(currentNode?.left)
       this.printTreeInOrder(currentNode?.right);
    }
    printTreePostOrder(currentNode = this.root) {
        if (!this.root || !currentNode) return;
        this.printTreeInOrder(currentNode?.left)
        this.printTreeInOrder(currentNode?.right);
        console.log(currentNode.data);
    }
}

const Tree = new BinarySearchTree();
const a = [ 1, 3, 8, 15]
a.forEach((val) => {
            Tree.insertNode(val);
})

Tree.insertNode(2);
Tree.insertNode(5);
Tree.insertNode(10);
Tree.insertNode(9)
Tree.insertNode(20)

// search a node
Tree.contains(2);

console.log("Root",Tree.root);

console.log("Printing tree Inorder [Left, Root, Right]");
// 2,5,10,10,20
Tree.printTreeInOrder()

//@todo - test properly
console.log("Printing tree Preorder [Root, Left, Right]");
Tree.printTreePreOrder();

console.log("Printing tree Postorder [Left, Right, Root]");
Tree.printTreePostOrder();