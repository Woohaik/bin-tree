"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.Node = void 0;
var BinaryTree_1 = require("./BinaryTree");
Object.defineProperty(exports, "BinaryTree", { enumerable: true, get: function () { return BinaryTree_1.BinaryTree; } });
var Node_1 = require("./Node");
Object.defineProperty(exports, "Node", { enumerable: true, get: function () { return Node_1.Node; } });
exports.default = (function (value, content) {
    if (content === void 0) { content = null; }
    return new BinaryTree_1.BinaryTree(value, content);
});
//# sourceMappingURL=index.js.map