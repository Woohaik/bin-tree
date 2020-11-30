interface IContent {
    value: number;
    content: any;
}
export declare class Node {
    private left;
    private right;
    private value;
    private content;
    constructor(value: number, content?: any);
    getContent(): IContent;
    setLeft(left: Node): void;
    insert(node: Node): void;
    setRight(right: Node): void;
    getLeft(): Node;
    getRight(): Node;
    setValue(value: number): void;
    getValue(): number;
}
export {};
