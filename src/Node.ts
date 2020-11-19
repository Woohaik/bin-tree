export class Node {
    private left: Node;
    private right: Node;
    private value: Number
    //public parent: Node;
    constructor(value: Number, left: Node = null, right: Node = null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }

    setLeft(left: Node) {
        this.left = left;
    }










    insert(node: Node) {
        if (node.getValue() > this.value) {
            if (this.right) {
                this.right.insert(node)
            } else {
                //    node.parent = this
                this.right = node
            }
        } else if (node.getValue() < this.value) {
            if (this.left) {
                this.left.insert(node)
            } else {
                // node.parent = this
                this.left = node
            }
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