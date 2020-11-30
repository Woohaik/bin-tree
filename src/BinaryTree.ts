import { Node } from "./Node";

interface IshowBy {
    showBy: String
}

export class BinaryTree {
    root: Node;
    constructor(rootValue: number = null, content: any = null) {
        rootValue ? this.root = new Node(rootValue, content) : this.root = null
    }
    remove(value: number) {
        this.root = this.removeNode(this.root, value)
    }
    insert(value: number, content: any = null) {
        this.root ? this.root.insert(new Node(value, content)) : this.root = new Node(value, content)
    }

    search(value: number): Node {
        return this.searchByValue(this.root, value);
    }



    inorder(arg: IshowBy = { showBy: "Value" }): any[] {
        const nodeArray: Node[] = this.internalInorder()
        if (arg.showBy === "Node") {
            return nodeArray;
        }
        if (arg.showBy === "Content") {
            return nodeArray.map(node => node.getContent());
        }
        return nodeArray.map(node => node.getValue());
    }

    postorder(arg: IshowBy = { showBy: "Value" }): any[] {
        const nodeArray: Node[] = this.intervalPostorder()

        if (arg.showBy === "Node") {
            return nodeArray;
        }

        if (arg.showBy === "Content") {
            return nodeArray.map(node => node.getContent());
        }

        return nodeArray.map(node => node.getValue());
    }

    preorder(arg: IshowBy = { showBy: "Value" }): any[] {
        const nodeArray: Node[] = this.internalPreorder();
        if (arg.showBy === "Node") {
            return nodeArray;
        }
        if (arg.showBy === "Content") {
            return nodeArray.map(node => node.getContent());
        }

        return nodeArray.map(node => node.getValue());
    }

    contain(value: number[]): boolean {
        const theSet: number[] = [...new Set(value.sort((a: number, b: number) => a - b))];
        const realValues: number[] = this.inorder();
        // For an array where all numbers math the length should not change at filter comparing each one to real values of the tree
        return theSet.filter(theValue => realValues.filter(realValue => realValue === theValue).length === 1).length === theSet.length;
    }

    /*INTERNAL FUNCTIONS */
    private searchByValue(node: Node, value: number): Node {
        if (!node) return null;
        if (value > node.getValue()) {
            return this.searchByValue(node.getRight(), value)
        } else if (value < node.getValue()) {
            return this.searchByValue(node.getLeft(), value)
        } else {
            return node;
        }
    }
    private internalPreorder(node: Node = this.root): Node[] {
        return node ? [node].concat(this.internalPreorder(node.getLeft())).concat(this.internalPreorder(node.getRight())) : []
    }
    private internalInorder(node: Node = this.root): Node[] {
        return node ? this.internalInorder(node.getLeft()).concat(node).concat(this.internalInorder(node.getRight())) : []
    }

    private intervalPostorder(node: Node = this.root): Node[] {
        return node ? this.intervalPostorder(node.getLeft()).concat(this.intervalPostorder(node.getRight())).concat(node) : []
    }

    private removeNode(node: Node, value: number): Node {
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
            const minValue: number = BinaryTree.searchMin(node.getRight())

            node.setValue(minValue) // El Nodo actual obtiene a borrar en realidad no se borra solo cambia de valor con el menor de su rama derecha 

            node.setRight(this.removeNode(node.getRight(), minValue)) // Ahora en la rama derecha tiene que borrarse el que se intercambio se borra el el nodo en esa rama con el valor obtenido y se sustituye la rama con esto
        }

        return node; // El nuevo nodo con los cambios se devuelve


    }


    /*STATIC FUNCTIONS */

    static searchMin(node: Node): number {
        return node.getLeft() ? this.searchMin(node.getLeft()) : node.getValue();
    }


}

