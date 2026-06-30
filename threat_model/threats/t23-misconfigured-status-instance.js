(function () {
    var threat = {
        id: "T23",
        name: "Misconfigured Status Instance",
        desc: "An incorrectly deployed status service allows unauthorized users to write unvetted status indicators or read metrics without proper authorization checks.",
        response: [
            { id: "R20", name: "Code Validation", type: "Reduce", desc: "Mandate that security configuration properties pass automated vulnerability configuration scanning checks before hitting production environments." },
            { id: "R21", name: "Cryptographically Bound Registry Permissions", type: "Reduce", desc: "Hardcode security dependencies requiring matching cryptographic signature assertions to stop unauthorized status modifications." },
            { id: "R27", name: "Robust Testing", type: "Reduce", desc: "Each workflow and individual endpoint on all processes should have robust testing to ensure expected results." }
        ],
        elements: ["P7", "F17", "P8", "P6", "F14", "P9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering"
    };
    window.ThreatModel.register(threat);
})();