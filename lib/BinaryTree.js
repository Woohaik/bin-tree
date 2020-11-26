"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var Node_1 = require("./Node");
var BinaryTree = /** @class */ (function () {
    function BinaryTree(rootValue, content) {
        if (rootValue === void 0) { rootValue = null; }
        if (content === void 0) { content = null; }
        rootValue ? this.root = new Node_1.Node(rootValue, content) : this.root = null;
    }
    BinaryTree.prototype.remove = function (value) {
        this.root = this.removeNode(this.root, value);
    };
    BinaryTree.prototype.insert = function (value, content) {
        if (content === void 0) { content = null; }
        this.root ? this.root.insert(new Node_1.Node(value, content)) : this.root = new Node_1.Node(value, content);
    };
    BinaryTree.prototype.search = function (value) {
        return this.searchByValue(this.root, value);
    };
    BinaryTree.prototype.inorder = function (arg) {
        if (arg === void 0) { arg = { showBy: "Value" }; }
        var nodeArray = this.internalInorder();
        if (arg.showBy === "Node") {
            return nodeArray;
        }
        if (arg.showBy === "Content") {
            return nodeArray.map(function (node) { return node.getContent(); });
        }
        return nodeArray.map(function (node) { return node.getValue(); });
    };
    BinaryTree.prototype.postorder = function (arg) {
        if (arg === void 0) { arg = { showBy: "Value" }; }
        var nodeArray = this.intervalPostorder();
        if (arg.showBy === "Node") {
            return nodeArray;
        }
        if (arg.showBy === "Content") {
            return nodeArray.map(function (node) { return node.getContent(); });
        }
        return nodeArray.map(function (node) { return node.getValue(); });
    };
    BinaryTree.prototype.preorder = function (arg) {
        if (arg === void 0) { arg = { showBy: "Value" }; }
        var nodeArray = this.internalPreorder();
        if (arg.showBy === "Node") {
            return nodeArray;
        }
        if (arg.showBy === "Content") {
            return nodeArray.map(function (node) { return node.getContent(); });
        }
        return nodeArray.map(function (node) { return node.getValue(); });
    };
    /*INTERNAL FUNCTIONS */
    BinaryTree.prototype.searchByValue = function (node, value) {
        if (!node)
            return null;
        if (value > node.getValue()) {
            return this.searchByValue(node.getRight(), value);
        }
        else if (value < node.getValue()) {
            return this.searchByValue(node.getLeft(), value);
        }
        else {
            return node;
        }
    };
    BinaryTree.prototype.internalPreorder = function (node) {
        if (node === void 0) { node = this.root; }
        return node ? [node].concat(this.internalPreorder(node.getLeft())).concat(this.internalPreorder(node.getRight())) : [];
    };
    BinaryTree.prototype.internalInorder = function (node) {
        if (node === void 0) { node = this.root; }
        return node ? this.internalInorder(node.getLeft()).concat(node).concat(this.internalInorder(node.getRight())) : [];
    };
    BinaryTree.prototype.intervalPostorder = function (node) {
        if (node === void 0) { node = this.root; }
        return node ? this.intervalPostorder(node.getLeft()).concat(this.intervalPostorder(node.getRight())).concat(node) : [];
    };
    BinaryTree.prototype.removeNode = function (node, value) {
        // No hay nada - cierra ciclo recursividad
        if (!node)
            return null;
        if (value > node.getValue()) {
            node.setRight(this.removeNode(node.getRight(), value)); // Significa que el que se removara esta en el nodo hijo derecho
            return node;
        }
        else if (value < node.getValue()) {
            node.setLeft(this.removeNode(node.getLeft(), value)); // Significa que el que se removara esta en el nodo hijo Izquierdo
            return node;
            //Este es el indicado
        }
        //No tiene hijos
        if (!(node.getRight() || node.getLeft())) {
            node = null;
            return node; //Se hace null asi mismo y fin del problema
        }
        /// Tiene hijos
        //Tiene izquierdo
        if (!node.getLeft()) {
            node = node.getRight(); // Como solo tiene hijo este puede pasar directamente a solo sustitirlo
            //Tiene derecho
        }
        else if (!node.getRight()) {
            node = node.getLeft(); // Como solo tiene hijo este puede pasar directamente a solo sustitirlo
            //Tiene ambos
        }
        else {
            //Se pone el menor del lado derecho (Solo como valor no por referencia)y luego este se borra de el arbol
            var minValue = BinaryTree.searchMin(node.getRight());
            node.setValue(minValue); // El Nodo actual obtiene a borrar en realidad no se borra solo cambia de valor con el menor de su rama derecha 
            node.setRight(this.removeNode(node.getRight(), minValue)); // Ahora en la rama derecha tiene que borrarse el que se intercambio se borra el el nodo en esa rama con el valor obtenido y se sustituye la rama con esto
        }
        return node; // El nuevo nodo con los cambios se devuelve
    };
    /*STATIC FUNCTIONS */
    BinaryTree.searchMin = function (node) {
        return node.getLeft() ? this.searchMin(node.getLeft()) : node.getValue();
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
