import { Node } from "./Node";
export class BinaryTree {
    root: Node;
    constructor(rootValue: Number) {
        this.root = new Node(rootValue);
    }
    remove(value: Number) {
        this.root = this.removeNode(this.root, value)
    }

    private removeNode(node: Node, value: Number): Node {
        // No hay nada - cierra ciclo recursividad
        if (!node) return null
        if (value > node.getValue()) {
            node.setRight(this.removeNode(node.getRight(), value)) // Significa que el que se removara esta en el nodo hijo derecho
            return node

        } else if (value < node.getValue()) {
            node.setLeft(this.removeNode(node.getLeft(), value)) // Significa que el que se removara esta en el nodo hijo Izquierdo
            return node
            //Este es el indicado
        } else {
            //No tiene hijos
            if (!(node.getRight() || node.getLeft())) {
                return null;  //Se hace null asi mismo y fin del problema
                // Tiene hijos
            } else {
                //Tiene izquierdo
                if (!node.getLeft()) {
                    node = node.getRight() // Como solo tiene hijo este puede pasar directamente a solo sustitirlo
                    //Tiene derecho
                } else if (!node.getRight()) {

                    node = node.getLeft() // Como solo tiene hijo este puede pasar directamente a solo sustitirlo
                    //Tiene ambos
                } else {
                    //Se pone el menor del lado derecho (Solo como valor no por referencia)y luego este se borra de el arbol
                    const minValue: Number = BinaryTree.searchMin(node.getRight())

                    node.setValue(minValue) // El Nodo actual obtiene a borrar en realidad no se borra solo cambia de valor con el menor de su rama derecha 

                    node.setRight(this.removeNode(node.getRight(), minValue)) // Ahora en la rama derecha tiene que borrarse el que se intercambio se borra el el nodo en esa rama con el valor obtenido y se sustituye la rama con esto
                }

                return node; // El nuevo nodo con los cambios se devuelve
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

