import { BinarySearchTreeNode } from "./BinarySearchTreeNode"

/**
 * Instantiate a Binary Search Tree
 */
 export class BinarySearchTree<T> {
    // Root is optional to start
    root?: BinarySearchTreeNode<T>

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator
    }

    comparator: (a: T, b: T) => number
    
    // Insert a single node into the tree
    insert(data: T): BinarySearchTreeNode<T> | undefined {
        // If there is no root - insert makes the insert data the root
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data)
            return this.root
        }

        // instantiate a marker (starts at root)
        let current = this.root


        while(true) {
            if (this.comparator(data, current.data) === 1) {
                if (current.rightNode) {
                    current = current.rightNode
                } else {
                    current.rightNode = new BinarySearchTreeNode(data)
                }
            } else {
                if (current.leftNode) {
                    current = current.leftNode
                } else {
                    current.leftNode = new BinarySearchTreeNode(data)
                    return current.leftNode
                }
            }
        }
    }

    // Find a specifc node
    search(data: T): BinarySearchTreeNode<T> | undefined {

        // if there isn't a root node - there is nothing to search
        if (!this.root) return

        // Start from the root node
        let current = this.root

        // if the value of the current node is not the target value - keep looking
        while(current.data !== data) {
            // current value is less than the search target - go right
            if (data > current.data) {
                // Right node is undefined - exit early - no result
                if (!current.rightNode) return
                // Drill down into the right node
                current = current.rightNode
            } else {
                // Left node is undefined - exit early - no result
                if (!current.leftNode) return
                // Drill down into the left node
                current = current.leftNode
            }
        }

        return current
    }

    /**
     * First visit left branch,
     * then the current node, 
     * and finally the right branch, 
     * because of how elements are distributed in the BST,
     * they will be visited in the ascending order:
     * @param node 
     */
    inOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            this.inOrderTraversal(node.leftNode)
            console.log(node.data)
            this.inOrderTraversal(node.rightNode)
        }
    }

    /**
     * Visit the current node before its children:
     * @param node 
     */
    preOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            console.log(node.data)
            this.preOrderTraversal(node.leftNode);
            this.preOrderTraversal(node.rightNode);
        }
    }

    /**
     * Visit the current node's children first, then the current node:
     * @param node 
     */
    postOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            this.postOrderTraversal(node.leftNode);
            this.postOrderTraversal(node.rightNode);
            console.log(node.data);
        }
    }

}