(function () {
    var threat = {
        id: "T26",
        name: "Misconfigured Workflow Instance",
        desc: "Flaws in one or more workflows allow a user client to bypass prerequisites, jumping directly into incorrect success or failure states.",
        response: [
            { id: "R26", name: "Misconfigurations Happen", type: "Accept", desc: "Despite best efforts, people make mistakes and misconfigurations will happen." },
            { id: "R27", name: "Robust Testing", type: "Reduce", desc: "Each workflow and individual endpoint on all processes should have robust testing to ensure expected results." }
        ],
        elements: ["P1", "F8", "P5", "F12", "F9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Elevation of Privilege"
    };
    window.ThreatModel.register(threat);
})();