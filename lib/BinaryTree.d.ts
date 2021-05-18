import { Node } from "./Node";
interface IshowBy {
    showBy: String;
}
export declare class BinaryTree<T = void> {
    root: Node<T>;
    constructor(rootValue?: Number, content?: T);
    remove(value: Number): void;
    insert(value: Number, content?: T): void;
    search(value: Number): Node<T>;
    inorder(arg?: IshowBy): any[];
    postorder(arg?: IshowBy): any[];
    preorder(arg?: IshowBy): any[];
    contain(value: Number[]): Boolean;
    private searchByValue;
    private internalPreorder;
    private internalInorder;
    private intervalPostorder;
    private removeNode;
    searchMin(node: Node<T>): Number;
}
export {};
