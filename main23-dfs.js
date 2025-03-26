class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}

inOrderTraversal(root);
