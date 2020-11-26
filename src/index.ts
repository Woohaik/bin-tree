import { BinaryTree } from "./BinaryTree";
import { Node } from "./Node";



export default (value: Number, content: any = null) => {
    return new BinaryTree(value, content);
}

export { Node, BinaryTree };


