(function () {
    var threat = {
        id: "T15",
        name: "Invalid Assignment or Overallocation of Status List Indexes",
        desc: "The issuer service incorrectly assigns multiple issued credentials to the same index in the status list, or assigns a credential to an index that is not in the list, leading to either incorrect or missing verification results.",
        response: [
            { id: "R15", name: "Status List Assignment Testing", type: "Reduce", desc: "Use robust testing to ensure that issuer software does not assign duplicate indexes from the status list and properly provisions new lists when existing ones are full." },
            { id: "R25", name: "Verifier Acceptance of Unavailable Status Service", type: "Accept", desc: "Some businesses or services will not care that some or all of their issued credentials are usable indefinitely, and some may actively choose to make this service unavailable. Verifier software, as well as any process handling business logic related to verification should handle such cases and not rely on status services being always available." }
        ],
        elements: ["P7", "F17", "P8", "P6", "F14", "P9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();