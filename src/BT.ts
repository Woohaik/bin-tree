import { Node } from "./Node";
export class BT {
    root: Node;
    constructor(root: Number) {
        this.root = new Node(root);
    }

    insert(value: Number) {
        this.root.insert(new Node(value));
    }
}