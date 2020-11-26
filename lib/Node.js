"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    //public parent: Node;
    function Node(value, content) {
        if (content === void 0) { content = null; }
        this.left = null;
        this.right = null;
        this.value = value;
        this.content = content;
    }
    Node.prototype.getContent = function () {
        return { value: this.value, content: this.content };
    };
    Node.prototype.setLeft = function (left) {
        if (left === null) {
            this.left = null;
        }
        else {
            if (left.getValue() < this.value) {
                this.left = left;
            }
        }
    };
    Node.prototype.insert = function (node) {
        if (node.getValue() > this.value) {
            if (this.right) {
                this.right.insert(node);
            }
            else {
                this.right = node;
            }
        }
        else if (node.getValue() < this.value) {
            if (this.left) {
                this.left.insert(node);
            }
            else {
                this.left = node;
            }
        }
        else if (node.getValue() === this.value) {
            throw new Error("Cannot repeat Value");
        }
    };
    Node.prototype.setRight = function (right) {
        if (right === null) {
            this.right = null;
        }
        else {
            if (right.getValue() > this.value) {
                this.right = right;
            }
        }
    };
    Node.prototype.getLeft = function () {
        return this.left;
    };
    Node.prototype.getRight = function () {
        return this.right;
    };
    Node.prototype.setValue = function (value) {
        this.value = value;
    };
    Node.prototype.getValue = function () {
        return this.value;
    };
    return Node;
}());
exports.Node = Node;
