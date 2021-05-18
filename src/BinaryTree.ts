import { Node } from "./Node";

interface IshowBy {
    showBy: String
}

export class BinaryTree<T = void> {
    root: Node<T>;
    constructor(rootValue: Number = null, content: T = null) {
        rootValue ? this.root = new Node(rootValue, content) : this.root = null
    }
    remove(value: Number) {
        this.root = this.removeNode(this.root, value)
    }
    insert(value: Number, content: T = null) {
        this.root ? this.root.insert(new Node(value, content)) : this.root = new Node(value, content)
    }

    search(value: Number): Node<T> {
        return this.searchByValue(this.root, value);
    }



    inorder(arg: IshowBy = { showBy: "Value" }): any[] {
        const nodeArray: Node<T>[] = this.internalInorder()
        if (arg.showBy === "Node") {
            return nodeArray;
        }
        if (arg.showBy === "Content") {
            return nodeArray.map(node => node.getContent());
        }
        return nodeArray.map(node => node.getValue());
    }

    postorder(arg: IshowBy = { showBy: "Value" }): any[] {
        const nodeArray: Node<T>[] = this.intervalPostorder()

        if (arg.showBy === "Node") {
            return nodeArray;
        }

        if (arg.showBy === "Content") {
            return nodeArray.map(node => node.getContent());
        }

        return nodeArray.map(node => node.getValue());
    }

    preorder(arg: IshowBy = { showBy: "Value" }): any[] {
        const nodeArray: Node<T>[] = this.internalPreorder();
        if (arg.showBy === "Node") {
            return nodeArray;
        }
        if (arg.showBy === "Content") {
            return nodeArray.map(node => node.getContent());
        }

        return nodeArray.map(node => node.getValue());
    }

    contain(value: Number[]): Boolean {
        return true;
    }

    /*INTERNAL FUNCTIONS */
    private searchByValue(node: Node<T>, value: Number): Node<T> {
        if (!node) return null;
        if (value > node.getValue()) {
            return this.searchByValue(node.getRight(), value)
        } else if (value < node.getValue()) {
            return this.searchByValue(node.getLeft(), value)
        } else {
            return node;
        }
    }
    private internalPreorder(node: Node<T> = this.root): Node<T>[] {
        return node ? [node].concat(this.internalPreorder(node.getLeft())).concat(this.internalPreorder(node.getRight())) : []
    }
    private internalInorder(node: Node<T> = this.root): Node<T>[] {
        return node ? this.internalInorder(node.getLeft()).concat(node).concat(this.internalInorder(node.getRight())) : []
    }

    private intervalPostorder(node: Node<T> = this.root): Node<T>[] {
        return node ? this.intervalPostorder(node.getLeft()).concat(this.intervalPostorder(node.getRight())).concat(node) : []
    }

    private removeNode(node: Node<T>, value: Number): Node<T> {
        // No hay nada - cierra ciclo recursividad
        if (!node) return null
        if (value > node.getValue()) {
            node.setRight(this.removeNode(node.getRight(), value)) // Significa que el que se removara esta en el nodo hijo derecho
            return node

        } else if (value < node.getValue()) {
            node.setLeft(this.removeNode(node.getLeft(), value)) // Significa que el que se removara esta en el nodo hijo Izquierdo
            return node
            //Este es el indicado
        }
        //No tiene hijos
        if (!(node.getRight() || node.getLeft())) {
            node = null;
            return node;  //Se hace null asi mismo y fin del problema

        }
        /// Tiene hijos
        //Tiene izquierdo
        if (!node.getLeft()) {
            node = node.getRight() // Como solo tiene hijo este puede pasar directamente a solo sustitirlo
            //Tiene derecho
        } else if (!node.getRight()) {

            node = node.getLeft() // Como solo tiene hijo este puede pasar directamente a solo sustitirlo
            //Tiene ambos
        } else {
            //Se pone el menor del lado derecho (Solo como valor no por referencia)y luego este se borra de el arbol
            const minValue: Number = this.searchMin(node.getRight())

            node.setValue(minValue) // El Nodo actual obtiene a borrar en realidad no se borra solo cambia de valor con el menor de su rama derecha 

            node.setRight(this.removeNode(node.getRight(), minValue)) // Ahora en la rama derecha tiene que borrarse el que se intercambio se borra el el nodo en esa rama con el valor obtenido y se sustituye la rama con esto
        }

        return node; // El nuevo nodo con los cambios se devuelve


    }



    searchMin(node: Node<T>): Number {
        return node.getLeft() ? this.searchMin(node.getLeft()) : node.getValue();
    }


}

