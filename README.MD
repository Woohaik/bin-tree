# tbin-tree

A Node.js Binary Tree module that can add, delet, order, search nodes with any content

```sh
npm install tbin-tree --save
```

## Usage

### Example

```javascript
const { BinaryTree } = require("tbin-tree");
const myBinaryTree = new BinaryTree();
myBinaryTree.insert(5, "Hello World!");
myBinaryTree.insert(15, "Hello Sun!");
myBinaryTree.insert(2, "Bye World!");
```

```sh

```

### TypeScript

```typescript
import { BinaryTree, Node } from "bin-tree";
```

## Test

```sh
npm run test
```
