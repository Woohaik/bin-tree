# tbin-tree

A Node.js binary tree module that can add, remove, search and traverse the nodes with any content.

## Installation

```sh
npm install tbin-tree --save
```

## Usage

### Quick Examples

#### Javascript ES5 Example

```javascript
var { BinaryTree } = require("tbin-tree");
var myBinaryTree = new BinaryTree();
// First param the value (Number) , and second optional param (Any) the content.
myBinaryTree.insert(5, "Hello World!");
myBinaryTree.insert(15, ["Im", "a", "Array", "!"]);
myBinaryTree.insert(2, "Bye World!");

var myNode = myBinaryTree.search(15);

myNode.getContent(); // => { value: 15, content:["Im", "a" , "Array", "!"]}

// Without param the default is showBy="Value"

myBinaryTree.inorder({ showBy: "Content" });

/**
 *    [
 *       { value: 2, content: 'Bye World!' },
 *       { value: 5, content: 'Hello World!' },
 *       { value: 15, content: ['Im', 'a', 'Array', '!'] }
 *   ]
 */
```

#### ES6 | TS Example

```typescript
import { BinaryTree, Node } from "tbin-tree";

const myBinaryTree = new BinaryTree();
myBinaryTree.insert(5, "Hello World!");
myBinaryTree.insert(15, ["Im", "a", "Array", "!"]);
myBinaryTree.insert(2, "Bye World!");

const myNode: Node = myBinaryTree.search(15);
myNode.getContent();
```

## Documentation

### Import

```javascript
const { BinaryTree } = require("tbin-tree");
```

### Initialize

We could initialize the Binary Tree by with two optional parameters to initialize the root **Node**:

- **value** : _Number_ (The unique identifier of a Node in base of this value the **Binary Tree** is ordered)
- **content** : _Any_ (Any value that we want to store in the root **Node**)

```javascript
const { BinaryTree } = require("tbin-tree");
const myBinaryTree = new BinaryTree(5, { fooKey: "Root Content" });
const mySecondaryBinaryTree = new BinaryTree();
```

### Insert Values

We must use the first parameter the value, the content is optional by default is null, repeating a value will throw an Error

```javascript
myBinaryTree.insert(11);
myBinaryTree.insert(13, "Im the Content :D!");
```

### Delete Nodes

Takes the target value to delete the node, reorganize the **Binary Tree** if we remove a Node with childs.

```javascript
myBinaryTree.remove(11);
```

### Search for Node

Takes the target value and returns the nodes if match, if there is no Node return null

```javascript
myBinaryTree.search(11); // => Node
```

### Traverse the Binary Tree

The class has 3 ways of traversing the **Binary Tree**.

- Inorder
- PostOrder
- Preorder

It returns an array of Nodes, its content or value.
All takes an optional object argument, with the key = showBy='Value' as default.
Also can show by: "Content", "Node"

```javascript
myBinaryTree.inorder({ showBy: "Content" });

/**
 *    [
 *       { value: 2, content: 'Bye World!' },
 *       { value: 5, content: 'Hello World!' },
 *       { value: 15, content: ['Im', 'a', 'Array', '!'] }
 *   ]
 */

myBinaryTree.inorder();

// [2,5,15]
```

## Clases

- **?** -Optional parameter "=" Default value

### BinaryTree

| Method                                       |                  Paramaters                  |                             Description                             |
| -------------------------------------------- | :------------------------------------------: | :-----------------------------------------------------------------: |
| **Contructor**                               | value(Number)? = null , content(any)? = null |                      Creates a new BinaryTree                       |
| insert                                       |     value(Number) , content(any)? = null     |                 Insert a new Node in the BinaryTree                 |
| remove                                       |                value(Number)                 |                 Removes a Node from the BinaryTree                  |
| search => _Node / null_                      |                value(Number)                 |                 Search for a Node in the BinaryTree                 |
| inorder => _Node[]_ / _any[]_ / _Number[]_   |     arg(Object) ? = { showBy = "Value" }     |        Traverse the BinaryTree in inorder and gets the Nodes        |
| postorder => _Node[]_ / _any[]_ / _Number[]_ |     arg(Object) ? = { showBy = "Value" }     |       Traverse the BinaryTree in postorder and gets the Nodes       |
| preorder => _Node[]_ / _any[]_ / _Number[]_  |     arg(Object) ? = { showBy = "Value" }     |       Traverse the BinaryTree in preorder and gets the Nodes        |
| STATIC searchMin => Number                   |                  node(Node)                  | Return the minimum value stored in a Node, counting the Node itself |

### Node

| Method                      |              Paramaters              |                          Description                           |
| --------------------------- | :----------------------------------: | :------------------------------------------------------------: |
| **Contructor**              | value(Number) , content(any)? = null |                       Creates a new Node                       |
| getContent => _Object_      |                _NONE_                |                  Get the content of the Node                   |
| insert                      |              node(Node)              |   Insert the Node as a child, if it can (No repeated values)   |
| setLeft                     |              node(Node)              | Insert the Node as left child, if it can (No repeated values)  |
| setRight                    |              node(Node)              | Insert the Node as right child, if it can (No repeated values) |
| getLeft => _Node_ / _null_  |                _NONE_                |                       Get the left Node                        |
| getRight => _Node_ / _null_ |                _NONE_                |                       Get the right Node                       |
| setValue                    |            value(Number)             |                    Force the value of Node                     |
| getValue => _Number_        |                _NONE_                |                   Get the value of the Node                    |

## License

The MIT License (MIT)

Copyright (c) 2020 Wilfredo Hernández - Woohaik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
