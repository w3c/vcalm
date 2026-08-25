(function () {
    var threat = {
        id: "T37",
        name: "Credential deletion violates legal regulation",
        desc: "Due to some legal regulation, such as “the right to be forgotten”, audit regulations, or for some other legal reason, the complete or partial storage of a credential is required for some amount of time after a deletion request has been made.",
        response: [
            { id: "R41", name: "Establish clear policy regarding credential deletion", type: "Transfer", desc: "Often confusion and frustration about why data is being kept is a result of a lack of communication between the various parties involved. If data is being kept for some valid reason, clear communication of these reasons back to the end user allows for all parties to make informed decisions and use the appropriate channels for complaints." },
            { id: "R42", name: "Configurable deletion", type: "Reduce", desc: "Implementers are advised to allow the system actions that occur after a delete to be configurable, such that system flexibility is sufficient to address any verifiable credential use case." }
        ],
        elements: ["P7", "P8", "P9", "C5"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();
