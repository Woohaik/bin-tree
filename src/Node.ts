interface IContent {
    value: number
    content: any
}

export class Node {
    private left: Node = null;
    private right: Node = null;
    private value: number;
    private content: any;
    //public parent: Node;
    constructor(value: number, content: any = null) {
        this.value = value;
        this.content = content;
    }

    getContent(): IContent {
        return { value: this.value, content: this.content };
    }

    setLeft(left: Node) {
        if (left === null) {
            this.left = null;
        } else {
            if (left.getValue() < this.value) {
                this.left = left;
            }
        }

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

        if (right === null) {
            this.right = null;
        } else {
            if (right.getValue() > this.value) {
                this.right = right;
            }
        }


    }

    getLeft(): Node {
        return this.left
    }

    getRight(): Node {
        return this.right
    }

    setValue(value: number) {
        this.value = value
    }

    getValue(): number {
        return this.value
    }
}

