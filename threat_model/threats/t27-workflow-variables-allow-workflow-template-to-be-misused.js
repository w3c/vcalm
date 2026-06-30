(function () {
    var threat = {
        id: "T27",
        name: "Workflow Variables Allow Workflow Template to be Misused",
        desc: "Workflow variable options expose unintended workflow paths allowing misused workflows or malicious actors to achieve unintended outcomes for the workflow.",
        response: [
            { id: "R27", name: "Robust Testing", type: "Reduce", desc: "Each workflow and individual endpoint on all processes should have robust testing to ensure expected results." }
        ],
        elements: ["P1", "F8", "P5", "F12", "F9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering"
    };
    window.ThreatModel.register(threat);
})();