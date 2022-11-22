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

    // TODO: investigate the comparator function further
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
}