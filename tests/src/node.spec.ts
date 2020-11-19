import { Node } from "../../src/Node";

import { BT } from "../../src/BT"







describe("Nodes Work", () => {
    it("Do nodes Work", () => {
        const node = new Node(5);
        const rightNode = new Node(1);
        expect(node.getValue()).toBe(5)
        expect(node.getRight()).toBeNull;
        expect(node.getLeft()).toBeNull;
        node.setRight(rightNode);
        expect(node.getRight()).toMatchObject(rightNode);
    })
})



describe("Should add nodes", () => {
    let tree = new BT(15);
    tree.insert(16)
    tree.insert(14)
    tree.insert(20)
    it("add one extra node", () => {
        expect(tree.root.getRight().getValue()).toBe(16);
        expect(tree.root.getLeft().getValue()).toBe(14);

    })

    it("Nested Nodes", () => {
        expect(tree.root.getRight().getRight().getValue()).toBe(20);
    }
    )

    it("Null wheres not suposed to be a Node", () => {
        expect(tree.root.getLeft().getLeft()).toBeNull;
    })
})

describe("should remove nodes", () => {

    it("remove the node root ", () => {
        let tree = new BT(15);
        tree.remove(15)
        expect(tree.root).toBeNull;
    })

    it("Not removing anything if no value match", () => {
        let tree = new BT(15);
        tree.remove(14)
        expect(tree.root.getValue()).toBe(15);
    })



})

describe("Tree", () => {

    it("Gets the lowerValue", () => {

    })

})