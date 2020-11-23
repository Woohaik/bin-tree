import { BinaryTree } from "../../src/BinaryTree"

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
            expect(BinaryTree.searchMin(tree.root)).toBe(4);
            tree.insert(3);
            tree.insert(14);
            expect(BinaryTree.searchMin(tree.root)).toBe(3);
        })

    })

    describe("Ordering the Values", () => {
        const tree: BinaryTree = new BinaryTree();
        tree.insert(8);
        tree.insert(3, "The Content");
        tree.insert(6, "Yee");
        tree.insert(1, "L is Real");
        tree.insert(4, 58);
        tree.insert(7, 5);
        tree.insert(10, { minecraft: true });
        tree.insert(14, ["IDK"]);
        tree.insert(13, "Finished");

        describe("In-Orders", () => {
            it("In-Order Default(Values)", () => {
                expect(tree.inorder()).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
            })

            it("In-Order Content(Values)", () => {
                expect(tree.inorder({ showBy: "Content" })).toEqual([
                    expect.objectContaining({ value: 1, content: "L is Real" }),
                    expect.objectContaining({ value: 3, content: "The Content" }),
                    expect.objectContaining({ value: 4, content: 58 }),
                    expect.objectContaining({ value: 6, content: "Yee" }),
                    expect.objectContaining({ value: 7, content: 5 }),
                    expect.objectContaining({ value: 8, content: null }),
                    expect.objectContaining({ value: 10, content: { minecraft: true } }),
                    expect.objectContaining({ value: 13, content: "Finished" }),
                    expect.objectContaining({ value: 14, content: ["IDK"] }),
                ]);
            })
        })

        describe("Post-Orders", () => {
            it("Post-Order Default(Values)", () => {
                expect(tree.postorder()).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
            })
        })

        describe("Pre-Orders", () => {
            it("Pre-Order Default(Values)", () => {
                expect(tree.preorder()).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13])
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

})



