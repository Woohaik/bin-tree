interface IContent<T> {
    value: Number
    content:T
}

export class Node <T = void>{
    private left: Node<T> = null;
    private right: Node<T> = null;
    private value: Number;
    private content:T;
    //public parent: Node;
    constructor(value: Number, content: T = null) {
        this.value = value;
        this.content = content;
    }

    getContent(): IContent<T> {
        return { value: this.value, content: this.content };
    }

    setLeft(left: Node<T>) {
        if (left === null) {
            this.left = null;
        } else {
            if (left.getValue() < this.value) {
                this.left = left;
            }
        }

    }

    insert(node: Node<T>) {
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

    setRight(right: Node<T>) {

        if (right === null) {
            this.right = null;
        } else {
            if (right.getValue() > this.value) {
                this.right = right;
            }
        }


    }

    getLeft(): Node<T> {
        return this.left
    }

    getRight(): Node<T> {
        return this.right
    }

    setValue(value: Number) {
        this.value = value
    }

    getValue(): Number {
        return this.value
    }
}

