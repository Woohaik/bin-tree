import { Node } from "./Node";
interface IshowBy {
    showBy: String;
}
export declare class BinaryTree {
    root: Node;
    constructor(rootValue?: Number, content?: any);
    remove(value: Number): void;
    insert(value: Number, content?: any): void;
    search(value: Number): Node;
    inorder(arg?: IshowBy): any[];
    postorder(arg?: IshowBy): any[];
    preorder(arg?: IshowBy): any[];
    private searchByValue;
    private internalPreorder;
    private internalInorder;
    private intervalPostorder;
    private removeNode;
    static searchMin(node: Node): Number;
}
export {};
//# sourceMappingURL=BinaryTree.d.ts.map