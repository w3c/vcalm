(function () {
    var threat = {
        id: "T37",
        name: "Credential Deletion Violates Legal Regulation",
        desc: "Due to some legal regulations and/or audit requirements, the complete or partial storage of a credential is required for some amount of time after a deletion request has been made.",
        response: [
            { id: "R41", name: "Establish Clear Policy Regarding Credential Deletion", type: "Transfer", desc: "Often confusion and frustration about why data is being retained is a result of a lack of communication between the various parties involved. If data is being retained for some valid reason, clear communication of these reasons back to the end user allows for all parties to make informed decisions and use the appropriate channels for complaints." },
            { id: "R42", name: "Configurable Deletion", type: "Reduce", desc: "Implementers are advised to allow the system actions that occur after a deletion to be configurable, such that system flexibility is sufficient to address any verifiable credential use case." }
        ],
        elements: ["P7", "P8", "P9", "C5"],
        tags: ["privacy"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();
