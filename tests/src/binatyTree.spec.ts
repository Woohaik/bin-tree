import { BinaryTree } from "../../src/BinaryTree";
import { Node } from "../../src/Node";

describe("Binary Tree tests", () => {
    describe("Should add root node when initilize without it", () => {
        const tree: BinaryTree = new BinaryTree();

        it("Root should be null", () => {
            expect(tree.root).toBe(null);
        })

        it("Root should be 5", () => {
            tree.insert(5);
            expect(tree.root.getValue()).toBe(5);
        })
    })

    describe("Should add nodes", () => {
        const tree: BinaryTree = new BinaryTree(15);
        tree.insert(16)
        tree.insert(14)
        tree.insert(20)
        it("Add one extra node", () => {
            expect(tree.root.getRight().getValue()).toBe(16);
            expect(tree.root.getLeft().getValue()).toBe(14);

        })

        it("Nested Nodes", () => {
            expect(tree.root.getRight().getRight().getValue()).toBe(20);
        }
        )

        it("Null wheres not suposed to be a Node", () => {
            expect(tree.root.getLeft().getLeft()).toBeNull();
        })
    })

    describe("should remove nodes", () => {

        it("remove the node root ", () => {
            const tree = new BinaryTree(15);
            tree.remove(15)
            expect(tree.root).toBeNull();
        })

        it("Not removing anything if no value match", () => {
            const tree = new BinaryTree(15);
            tree.insert(22);
            tree.remove(14)
            expect(tree.root.getValue()).toBe(15);
        })


        describe("Removes nested nodes", () => {

            it("Remove one node without childrens", () => {
                const tree = new BinaryTree(10);
                tree.insert(8);
                tree.insert(5);
                expect(tree.root.getLeft().getLeft().getValue()).toBe(5)




                tree.remove(5);
                expect(tree.root.getLeft().getLeft()).toBeNull();

            })


            it("Remove a node with one children (Left))", () => {
                const tree = new BinaryTree(10);
                tree.insert(8);
                tree.insert(5);
                tree.remove(8);
                expect(tree.root.getLeft().getValue()).toBe(5) // The 8 was substituted by 5
            })

            it("Remove a node with one children (Right)", () => {
                const tree = new BinaryTree(10);
                tree.insert(8);
                tree.insert(9);
                tree.remove(8);
                expect(tree.root.getLeft().getValue()).toBe(9) // The 8 was substituted by 9
            })


            it("Removes a node with two children", () => {
                const tree = new BinaryTree(10);
                tree.insert(8);
                tree.insert(9);
                tree.insert(5);
                tree.remove(8);
                expect(tree.root.getLeft().getValue()).toBe(9) // The 8 was substituted by the right node 
                expect(tree.root.getLeft().getLeft().getValue()).toBe(5) // Now the left value of right should be 5
            })


            it("Removing the root with nestes nodes", () => {
                const tree = new BinaryTree(15);
                tree.insert(25);
                tree.insert(10);
                tree.insert(7);
                tree.insert(22);
                tree.insert(17);
                tree.insert(13);
                tree.insert(5);
                tree.insert(9);
                tree.insert(27);
                tree.remove(15); //Removing root
                expect(tree.root.getValue()).toBe(17)  //El root deberia comvertirse en 17 que es su inmediato superior
                expect(tree.root.getLeft().getValue()).toBe(10); // Todo el lado izquierdo se debio mantener
                expect(tree.root.getRight().getValue()).toBe(25); //El siguiente mayor a 17 es 25
            })

        })
    })

    describe("Get Min", () => {
        it("Gets the lowerValue", () => {
            const tree: BinaryTree = new BinaryTree(8);
            tree.insert(22);
            tree.insert(7);
            tree.insert(4);
            tree.insert(11);
            expect(tree.searchMin(tree.root)).toBe(4);
            tree.insert(3);
            tree.insert(14);
            expect(tree.searchMin(tree.root)).toBe(3);
        })

    })

    describe("Ordering the Values", () => {
        const tree: BinaryTree<string> = new BinaryTree();
        tree.insert(8);
        tree.insert(3, "The Content");
        tree.insert(6, "Yee");
        tree.insert(1, "L is Real");
        tree.insert(4, "nanay");
        tree.insert(7, "another string");
        tree.insert(10, "I must be string");
        tree.insert(14, "IDK");
        tree.insert(13, "Finished");

        describe("In-Orders", () => {
            it("In-Order Default(Values)", () => {
                expect(tree.inorder()).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
            })

            it("In-Order Content", () => {
                expect(tree.inorder({ showBy: "Content" })).toEqual([
                    { value: 1, content: "L is Real" },
                    { value: 3, content: "The Content" },
                    { value: 4, content: "nanay" },
                    { value: 6, content: "Yee" },
                    { value: 7, content: "another string" },
                    { value: 8, content: null },
                    { value: 10, content: "I must be string" },
                    { value: 13, content: "Finished" },
                    { value: 14, content: "IDK" },
                ]);
            })
            it("In-Order Node", () => {
                const nodes: Node[] = tree.inorder({ showBy: "Node" })
                expect(nodes[0]).toBeInstanceOf(Node);
                expect(nodes[0].getContent()).toEqual({ value: 1, content: "L is Real" })
                expect(nodes[1].getContent()).toEqual({ value: 3, content: "The Content" })
                expect(nodes[2].getContent()).toEqual({ value: 4, content: "nanay" })
                expect(nodes[3].getContent()).toEqual({ value: 6, content: "Yee" })
                expect(nodes[4].getContent()).toEqual({ value: 7, content: "another string" })
                expect(nodes[5].getContent()).toEqual({ value: 8, content: null })
                expect(nodes[6].getContent()).toEqual({ value: 10, content: "I must be string" })
                expect(nodes[7].getContent()).toEqual({ value: 13, content: "Finished" })
                expect(nodes[8].getContent()).toEqual({ value: 14, content: "IDK" })
            })
        })

        describe("Post-Orders", () => {
            it("Post-Order Default(Values)", () => {
                expect(tree.postorder()).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
            })

            it("Post-Order Content", () => {
                expect(tree.postorder({ showBy: "Content" })).toEqual([
                    { value: 1, content: "L is Real" },
                    { value: 4, content: "nanay" },
                    { value: 7, content: "another string" },
                    { value: 6, content: "Yee" },
                    { value: 3, content: "The Content" },
                    { value: 13, content: "Finished" },
                    { value: 14, content: "IDK" },
                    { value: 10, content: "I must be string" },
                    { value: 8, content: null },

                ]);
            })
            it("Post-Order Node", () => {
                const nodes: Node[] = tree.postorder({ showBy: "Node" })
                expect(nodes[0]).toBeInstanceOf(Node);
                expect(nodes[0].getContent()).toEqual({ value: 1, content: "L is Real" })
                expect(nodes[3].getContent()).toEqual({ value: 6, content: "Yee" })
                expect(nodes[4].getContent()).toEqual({ value: 3, content: "The Content" })
                expect(nodes[5].getContent()).toEqual({ value: 13, content: "Finished" })
                expect(nodes[6].getContent()).toEqual({ value: 14, content: "IDK" })
                expect(nodes[8].getContent()).toEqual({ value: 8, content: null })
            })
        })

        describe("Pre-Orders", () => {
            it("Pre-Order Default(Values)", () => {
                expect(tree.preorder()).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13])
            })
            it("Pre-Orders Content", () => {
                expect(tree.preorder({ showBy: "Content" })).toEqual([
                    { value: 8, content: null },
                    { value: 3, content: "The Content" },
                    { value: 1, content: "L is Real" },
                    { value: 6, content: "Yee" },
                    { value: 4, content: "nanay" },
                    { value: 7, content: "another string" },
                    { value: 10, content: "I must be string" },
                    { value: 14, content: "IDK" },
                    { value: 13, content: "Finished" },
                ]);
            })
            it("Pre-Order Node", () => {
                const nodes: Node[] = tree.preorder({ showBy: "Node" })
                expect(nodes[0]).toBeInstanceOf(Node);
                expect(nodes[0].getContent()).toEqual({ value: 8, content: null })
                expect(nodes[1].getContent()).toEqual({ value: 3, content: "The Content" })
                expect(nodes[2].getContent()).toEqual({ value: 1, content: "L is Real" })
                expect(nodes[3].getContent()).toEqual({ value: 6, content: "Yee" })
                expect(nodes[7].getContent()).toEqual({ value: 14, content: "IDK" })
                expect(nodes[8].getContent()).toEqual({ value: 13, content: "Finished" })
            })
        })
    })


    describe("Cannot insert repeated Values ", () => {
        const tree: BinaryTree = new BinaryTree();
        tree.insert(5);
        tree.insert(7);

        it("Inserting Repating nodes should throw an error", () => {
            expect(() => { tree.insert(5) }).toThrow("Cannot repeat Value")
        })


    })


    describe("Search for Node by value", () => {
        const tree: BinaryTree<number> = new BinaryTree();
        tree.insert(4, 15);
        tree.insert(8);
        tree.insert(3, 1555);
        tree.insert(6, 8);
        tree.insert(1, -15468761);
        tree.insert(7, 5);
        it("Should Find a Node", () => {
            expect(tree.search(4)).toBeInstanceOf(Node);
        })

        it("Should Find the Nodes", () => {
            expect(tree.search(4).getContent()).toEqual({ value: 4, content: 15 })
            expect(tree.search(8).getContent()).toEqual({ value: 8, content: null })
            expect(tree.search(3).getLeft().getValue()).toEqual(1)
        })

        it("Returns null when theres no Node with that value", () => {
            expect(tree.search(15)).toBeNull();
            expect(tree.search(2)).toBeNull();
        })
    })

})



