(function () {
    var threat = {
        id: "T22",
        name: "Misconfigured Component Instance",
        desc: "An administrator of a holder, verifier, issuer, or workflow instance misconfigures some aspect of the software, whether that be the coordinator or service for their particular role, leading to the component misbehaving in its intended role.",
        response: [
            { id: "R20", name: "Code Validation", type: "Reduce", desc: "Mandate that security configuration properties pass automated vulnerability configuration scanning checks before hitting production environments." },
            { id: "R21", name: "Use Authorization Technologies", type: "Reduce", desc: "Protect the endpoints that change a component's configuration or status with an authorization technology, such as OAuth 2.0 or authorization capabilities (zcaps), so that only authorized parties can make those changes." },
            { id: "R26", name: "Misconfigurations Happen", type: "Accept", desc: "Despite best efforts, people make mistakes and misconfigurations will happen." },
            { id: "R27", name: "Robust Testing", type: "Reduce", desc: "Each workflow and individual endpoint on all processes should have robust testing to ensure expected results." },
            { id: "R28", name: "Audit for Quality", type: "Reduce", desc: "Implement audit processes to perform regular quality assurance." },
            { id: "R29", name: "Undo Misconfigured Issuance by Revocation", type: "Accept and Transfer", desc: "When an issuance misconfiguration happens, <a>Issuers</a> revoke credentials." }
        ],
        elements: ["P4", "P5", "P7"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Elevation of Privilege"
    };
    window.ThreatModel.register(threat);
})();
