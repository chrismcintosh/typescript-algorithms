import { BinarySearchTree } from "./BinarySearchTree/BinarySearchTree";
import comparator from "./comparator"

let bst = new BinarySearchTree(comparator)

bst.insert(5)
bst.insert(7)
bst.insert(3)
bst.insert(4)

console.log(bst.root?.leftNode?.rightNode)