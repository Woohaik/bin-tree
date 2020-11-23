interface IContent {
    value: Number
    content: any
}

export class Node {
    private left: Node = null;
    private right: Node = null;
    private value: Number;
    private content: any;
    //public parent: Node;
    constructor(value: Number, content: any = null) {
        this.value = value;
        this.content = content;
    }
    getContent(): IContent {
        return { value: this.value, content: this.content };
    }

    setLeft(left: Node) {
        this.left = left;
    }

    insert(node: Node) {
        if (node.getValue() > this.value) {
            if (this.right) {
                this.right.insert(node)
            } else {
                this.right = node
            }
        } else if (node.getValue() < this.value) {
            if (this.left) {
                this.left.insert(node)
            } else {
                this.left = node
            }
        } else if (node.getValue() === this.value) {

            throw new Error("Cannot repeat Value");

        }
    }

    setRight(right: Node) {
        this.right = right;
    }

    getLeft(): Node {
        return this.left
    }

    getRight(): Node {
        return this.right
    }

    setValue(value: Number) {
        this.value = value
    }

    getValue(): Number {
        return this.value
    }
}