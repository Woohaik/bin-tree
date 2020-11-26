"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.BinaryTree = void 0;
var BinaryTree_1 = require("./BinaryTree");
var BinaryTree_2 = require("./BinaryTree");
Object.defineProperty(exports, "BinaryTree", { enumerable: true, get: function () { return BinaryTree_2.BinaryTree; } });
var Node_1 = require("./Node");
Object.defineProperty(exports, "Node", { enumerable: true, get: function () { return Node_1.Node; } });
var defaultFunction = function (value, content) {
    if (value === void 0) { value = null; }
    if (content === void 0) { content = null; }
    return new BinaryTree_1.BinaryTree(value, content);
};
module.exports = defaultFunction;
