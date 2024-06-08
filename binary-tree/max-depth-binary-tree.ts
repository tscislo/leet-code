class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

//[3,9,20,null,null,15,7]

const n7 = new TreeNode(7);
const n15 = new TreeNode(15);
const n9 = new TreeNode(9);

const n20 = new TreeNode(20, n15, n7);

const root = new TreeNode(3, n9, n20);

function traverseBinaryTree(root: TreeNode | null): void {
    // reached the end of a branch
    if (root === null) {
        return
    }
    console.log(root.val);
    traverseBinaryTree(root.left);
    traverseBinaryTree(root.right)
}

function maxDepth(root: TreeNode | null): number {
    if (root !== null) {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right)
        return 1 + Math.max(left, right);
    }
    return 0
};

traverseBinaryTree(root);
console.log("MAX depth", maxDepth(root))