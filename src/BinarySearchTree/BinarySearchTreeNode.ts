/**
 * A single node in a tree
 */
 export class BinarySearchTreeNode<T> {
    data: T
    leftNode?: BinarySearchTreeNode<T>
    rightNode?: BinarySearchTreeNode<T>

    constructor(data: T) {
        this.data = data
    }
}