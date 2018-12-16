import provider from "../../src/provider/provider";
import query from '../../src/query/query.js'
import dataModel from "../../src/datamodel/dataModel";

describe("one branch", function () {
    beforeEach(() => {
        dataModel.nodes = [
            {
                id: 0,
                label: "Root",
                internalLabel: "root",
                type: 0
            },
            {
                id: 1,
                label: "Node",
                internalLabel: "node",
                type: 1,
                isNegative: true
            }
        ];

        dataModel.links = [
            {
                id: 1,
                label: "LINKED_TO",
                source: dataModel.nodes[0],
                target: dataModel.nodes[1],
                type: 1
            }
        ];

        provider.node.Provider = {
            "Root": {
                returnAttributes: ["name", "id"],
                constraintAttribute: "id",
            },
            "Node": {
                returnAttributes: ["Nname", "Nid"],
                constraintAttribute: "Nid",
            }
        };
    });

    afterEach(() => {
        delete provider.node.Provider;
    });

    test("WHERE (NOT exists (path-to-branch))", () => {
        var statement = query.generateResultQuery(false).statement;
        expect(statement).toMatchSnapshot();
    });
});

describe("one branch with one value", function () {
    beforeEach(() => {
        dataModel.nodes = [
            {
                id: 0,
                label: "Root",
                internalLabel: "root",
                type: 0
            },
            {
                id: 1,
                label: "Node",
                internalLabel: "node",
                type: 1,
                value: [{label: "Node", attributes: {Nid: "Vid", Nname: "Vname"}}],
                isNegative: true
            }
        ];

        dataModel.links = [
            {
                id: 1,
                label: "LINKED_TO",
                source: dataModel.nodes[0],
                target: dataModel.nodes[1],
                type: 1
            }
        ];

        provider.node.Provider = {
            "Root": {
                returnAttributes: ["name", "id"],
                constraintAttribute: "id",
            },
            "Node": {
                returnAttributes: ["Nname", "Nid"],
                constraintAttribute: "Nid",
            }
        };
    });

    afterEach(() => {
        delete provider.node.Provider;
    });

    test("WHERE (NOT exists (path-to-branch-with-value))", () => {
        var statement = query.generateResultQuery(false).statement;
        expect(statement).toMatchSnapshot();
    });
});

describe("one long-branch", function () {
    beforeEach(() => {
        dataModel.nodes = [
            {
                id: 0,
                label: "Root",
                internalLabel: "root",
                type: 0
            },
            {
                id: 1,
                label: "Node",
                internalLabel: "node1",
                type: 1,
            },
            {
                id: 3,
                label: "Node",
                internalLabel: "node2",
                type: 1,
                isNegative: true
            }
        ];

        dataModel.links = [
            {
                id: 1,
                label: "LINKED_TO1",
                source: dataModel.nodes[0],
                target: dataModel.nodes[1],
                type: 1
            },
            {
                id: 2,
                label: "LINKED_TO2",
                source: dataModel.nodes[1],
                target: dataModel.nodes[2],
                type: 1
            }
        ];

        provider.node.Provider = {
            "Root": {
                returnAttributes: ["name", "id"],
                constraintAttribute: "id",
            },
            "Node": {
                returnAttributes: ["Nname", "Nid"],
                constraintAttribute: "Nid",
            }
        };
    });

    afterEach(() => {
        delete provider.node.Provider;
    });

    test("WHERE (NOT exists (path-to-long-branch))", () => {
        var statement = query.generateResultQuery(false).statement;
        expect(statement).toMatchSnapshot();
    });
});

describe("one long-branch with value leaf", function () {
    beforeEach(() => {
        dataModel.nodes = [
            {
                id: 0,
                label: "Root",
                internalLabel: "root",
                type: 0
            },
            {
                id: 1,
                label: "Node",
                internalLabel: "node1",
                type: 1,
            },
            {
                id: 3,
                label: "Node",
                internalLabel: "node2",
                value: [{label: "Node", attributes: {Nid: "Vid", Nname: "Vname"}}],
                type: 1,
                isNegative: true
            }
        ];

        dataModel.links = [
            {
                id: 1,
                label: "LINKED_TO1",
                source: dataModel.nodes[0],
                target: dataModel.nodes[1],
                type: 1
            },
            {
                id: 2,
                label: "LINKED_TO2",
                source: dataModel.nodes[1],
                target: dataModel.nodes[2],
                type: 1
            }
        ];

        provider.node.Provider = {
            "Root": {
                returnAttributes: ["name", "id"],
                constraintAttribute: "id",
            },
            "Node": {
                returnAttributes: ["Nname", "Nid"],
                constraintAttribute: "Nid",
            }
        };
    });

    afterEach(() => {
        delete provider.node.Provider;
    });

    test("WHERE (NOT exists (path-to-long-branch-with-value))", () => {
        var statement = query.generateResultQuery(false).statement;
        expect(statement).toMatchSnapshot();
    });
});

describe("one long-branch with value mid", function () {
    beforeEach(() => {
        dataModel.nodes = [
            {
                id: 0,
                label: "Root",
                internalLabel: "root",
                type: 0
            },
            {
                id: 1,
                label: "Node",
                internalLabel: "node1",
                value: [{label: "Node", attributes: {Nid: "Vid", Nname: "Vname"}}],
                type: 1,
            },
            {
                id: 3,
                label: "Node",
                internalLabel: "node2",
                type: 1,
                isNegative: true
            }
        ];

        dataModel.links = [
            {
                id: 1,
                label: "LINKED_TO1",
                source: dataModel.nodes[0],
                target: dataModel.nodes[1],
                type: 1
            },
            {
                id: 2,
                label: "LINKED_TO2",
                source: dataModel.nodes[1],
                target: dataModel.nodes[2],
                type: 1
            }
        ];

        provider.node.Provider = {
            "Root": {
                returnAttributes: ["name", "id"],
                constraintAttribute: "id",
            },
            "Node": {
                returnAttributes: ["Nname", "Nid"],
                constraintAttribute: "Nid",
            }
        };
    });

    afterEach(() => {
        delete provider.node.Provider;
    });

    test("WHERE (NOT exists (path-to-long-branch-with-value))", () => {
        var statement = query.generateResultQuery(false).statement;
        expect(statement).toMatchSnapshot();
    });
});

describe("one long-branch with NOT value mid", function () {
    beforeEach(() => {
        dataModel.nodes = [
            {
                id: 0,
                label: "Root",
                internalLabel: "root",
                type: 0
            },
            {
                id: 1,
                label: "Node",
                internalLabel: "node1",
                value: [{label: "Node", attributes: {Nid: "Vid", Nname: "Vname"}}],
                isNegative: true,
                type: 1,
            },
            {
                id: 3,
                label: "Node",
                internalLabel: "node2",
                type: 1,
            }
        ];

        dataModel.links = [
            {
                id: 1,
                label: "LINKED_TO1",
                source: dataModel.nodes[0],
                target: dataModel.nodes[1],
                type: 1
            },
            {
                id: 2,
                label: "LINKED_TO2",
                source: dataModel.nodes[1],
                target: dataModel.nodes[2],
                type: 1
            }
        ];

        provider.node.Provider = {
            "Root": {
                returnAttributes: ["name", "id"],
                constraintAttribute: "id",
            },
            "Node": {
                returnAttributes: ["Nname", "Nid"],
                constraintAttribute: "Nid",
            }
        };
    });

    afterEach(() => {
        delete provider.node.Provider;
    });

    test("WHERE (NOT exists (path-to-long-branch-with-value))", () => {
        var statement = query.generateResultQuery(false).statement;
        expect(statement).toMatchSnapshot();
    });
});

