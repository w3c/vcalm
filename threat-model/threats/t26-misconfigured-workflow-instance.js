(function () {
    var threat = {
        id: "T26",
        name: "Misconfigured Workflow Instance",
        desc: "Flaws in one or more workflows allow a user client to bypass prerequisites, jumping directly into incorrect success or failure states.",
        response: [
            { id: "R26", name: "Misconfigurations Happen", type: "Accept", desc: "Despite best efforts, people make mistakes and misconfigurations will happen." },
            { id: "R27", name: "Robust Testing", type: "Reduce", desc: "Each workflow and individual endpoint on all processes should have robust testing to ensure expected results." },
            { id: "R28", name: "Audit for Quality", type: "Reduce", desc: "<a>Issuers</a> implement audit processes to perform regular quality assurance." },
            { id: "R29", name: "Undo by Revocation", type: "Accept and Transfer", desc: "When misconfiguration happens, <a>Issuers</a> revoke credentials." }
        ],
        elements: ["P1", "F8", "P5", "F12", "F9"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Elevation of Privilege"
    };
    window.ThreatModel.register(threat);
})();