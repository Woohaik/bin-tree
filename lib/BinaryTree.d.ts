import { Node } from "./Node";
interface IshowBy {
    showBy: String;
}
export declare class BinaryTree {
    root: Node;
    constructor(rootValue?: number, content?: any);
    remove(value: number): void;
    insert(value: number, content?: any): void;
    search(value: number): Node;
    inorder(arg?: IshowBy): any[];
    postorder(arg?: IshowBy): any[];
    preorder(arg?: IshowBy): any[];
    contain(value: number[]): boolean;
    private searchByValue;
    private internalPreorder;
    private internalInorder;
    private intervalPostorder;
    private removeNode;
    static searchMin(node: Node): number;
}
export {};
