
interface IContent<T> {
    value: Number;
    content: T;
}
export declare class Node<T = void> {
    private left;
    private right;
    private value;
    private content;
    constructor(value: Number, content?: T);
    getContent(): IContent<T>;
    setLeft(left: Node<T>): void;
    insert(node: Node<T>): void;
    setRight(right: Node<T>): void;
    getLeft(): Node<T>;
    getRight(): Node<T>;
    setValue(value: Number): void;
    getValue(): Number;
}
export {};
