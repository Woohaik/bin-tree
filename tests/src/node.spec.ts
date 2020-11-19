import { Node } from "../../src/Node";

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