import { BinarySearchTree } from "./BinarySearchTree/BinarySearchTree";
import comparator from "./comparator"

let bst = new BinarySearchTree(comparator)

bst.insert(5)
bst.insert(7)
bst.insert(3)
bst.insert(4)
bst.insert(11)
bst.insert(42)



console.log(bst.inOrderTraversal(bst.root))