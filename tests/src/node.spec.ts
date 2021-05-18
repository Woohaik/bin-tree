import { Node } from "../../src/Node";



describe("Node Tests", () => {

    describe("Nodes Work", () => {
        const node: Node<string> = new Node(5, "Hello Word");
        it("Do nodes Work", () => {
            expect(node.getValue()).toBe(5)
            expect(node.getRight()).toBeNull();
            expect(node.getLeft()).toBeNull();
        })
        it("Nodes saves the content", () => {
            expect(node.getContent()).toEqual(expect.objectContaining({ content: "Hello Word" }))
        })


    })

    describe("Add Nested Nodes", () => {
        const node: Node = new Node(5);
        const leftNode: Node = new Node(1);
        const rightNode: Node = new Node(8);

        node.setRight(rightNode);

        it("Inserting one Node in other", () => {
            expect(node.getRight()).toMatchObject(rightNode);
        })

        node.setLeft(leftNode);

        it("Inserting the other Node", () => {
            expect(node.getLeft()).toMatchObject(leftNode);
        })
    })


})