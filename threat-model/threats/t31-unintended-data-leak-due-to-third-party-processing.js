(function () {
    var threat = {
        id: "T31",
        name: "Unintended Data Leak Due to Third Party Processing",
        desc: "An issuer or verifier may make use of a third party service to process some data during an issuance or verification workflow. This third party service becomes a potential data leak risk as it may be able to aggregate across different issuers or verifiers using its services.",
        response: [
            { id: "R46", name: "Minimize Data Sent to Third Party Services", type: "Reduce", desc: "Sending only data necessary for a third party service to perform its intended function limits the ability of the service, maliciously or via attacks on said service, to reveal unintended data." },
            { id: "R47", name: "Appropriate Legal Contracts", type: "Transfer", desc: "When making use of a third party service, having appropriate legal contracts in place around the usage of the data sent to the service allows issuers and verifiers to have recourse should data leaks occur." }
        ],
        elements: ["P4"],
        tags: ["privacy"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();
