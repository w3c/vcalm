(function () {
    var threat = {
        id: "T22",
        name: "Misconfigured Issuer Instance",
        desc: "An issuer administrator misconfigures some aspect of the issuance software, whether that be the coordinator, service, or workflow service related to issuing credentials leading to false issuance or an incorrect rejection of an issuance request.",
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
