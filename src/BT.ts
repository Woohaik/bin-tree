import { Node } from "./Node";
export class BT {
    root: Node;
    constructor(root: Number) {
        this.root = new Node(root);
    }
    remove(value: Number) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(node: Node, value: Number): Node {
        // No hay nada cierra ciclo
        if (!node) return null
        if (value > node.getValue()) {
            node.setRight(this.removeNode(node.getRight(), value))
            return node

        } else if (value < node.getValue()) {
            node.setLeft(this.removeNode(node.getLeft(), value))
            return node
            //Este es el indicado
        } else {
            //No tiene hijos
            if (!(node.getRight() || node.getLeft())) {
                return null;
                // Tiene hijos
            } else {

                //Tiene izquierdo

                if (!node.getLeft()) {
                    node = node.getRight()
                    //Tiene derecho
                } else if (!node.getRight()) {
                    node = node.getLeft()
                    //Tiene ambos
                } else {
                    //Se pone el menor del lado derecho y luego este se borra de el arbol
                    const minValue: Number = BT.searchMin(node.getRight())

                    node.setValue(minValue)

                    node.setRight(this.removeNode(node.getRight(), minValue))
                }

                return node;
            }
        }
    }

    static searchMin(node: Node): Number {
        return node.getLeft() ? this.searchMin(node.getLeft()) : node.getValue();
    }

    insert(value: Number) {
        this.root ? this.root.insert(new Node(value)) : this.root = new Node(value)

    }
}

