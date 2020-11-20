import { BinaryTree } from "./BinaryTree"


const tree = new BinaryTree(15);

tree.insert(25);
tree.insert(10);
tree.insert(7);
tree.insert(22);
tree.insert(17);
tree.insert(13);
tree.insert(5);
tree.insert(9);
tree.insert(27);


console.log(tree.inorden(tree.root));












