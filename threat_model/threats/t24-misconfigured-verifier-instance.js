(function () {
    var threat = {
        id: "T24",
        name: "Misconfigured Verifier Instance",
        desc: "An verifier administrator misconfigures some aspect of the verification software, whether that be the coordinator, service, or workflow service related to verifying credentials leading to inaccurate or wrong verifications.",
        response: [
            { id: "R26", name: "Misconfigurations Happen", type: "Accept", desc: "Despite best efforts, people make mistakes and misconfigurations will happen." },
            { id: "R27", name: "Robust Testing", type: "Reduce", desc: "Each workflow and individual endpoint on all processes should have robust testing to ensure expected results." }
        ],
        elements: ["P4", "P5", "P7"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Elevation of Privilege"
    };
    window.ThreatModel.register(threat);
})();