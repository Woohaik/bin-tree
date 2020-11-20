import { Node } from "../../src/Node";

describe("Nodes Work", () => {
    it("Do nodes Work", () => {
        const node = new Node(5);
        expect(node.getValue()).toBe(5)
        expect(node.getRight()).toBeNull();
        expect(node.getLeft()).toBeNull();

    })
})


describe("Adds Nested Nodes", () => {
    const node = new Node(5);
    const leftNode = new Node(1);
    const rightNode = new Node(8);

    node.setRight(rightNode);

    it("Inserting one Node in other", () => {
        expect(node.getRight()).toMatchObject(rightNode);
    })
    node.setLeft(leftNode);

    it("Inserting the other Node", () => {
        expect(node.getLeft()).toMatchObject(leftNode);
    })

})