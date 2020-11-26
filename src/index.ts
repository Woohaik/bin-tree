import { BinaryTree } from "./BinaryTree";

export { BinaryTree } from "./BinaryTree";
export { Node } from "./Node";





const defaultFunction = (value: Number = null, content: any = null) => {
    return new BinaryTree(value, content);
}


module.exports = defaultFunction;