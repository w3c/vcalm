(function () {
    var threat = {
        id: "T38",
        name: "Mishandled status information upon credential deletion reveals information",
        desc: "When deleting a verifiable credential, handling of its status information needs to be considered. Some use cases might call for deletion of a particular verifiable credential to also set the revocation and suspension bits of that verifiable credential, such that any sort of status check for the deleted credential fails and use of the credential is halted.",
        response: [
            { id: "R41", name: "Establish clear policy regarding credential deletion", type: "Transfer", desc: "Often confusion and frustration about why data is being kept is a result of a lack of communication between the various parties involved. If data is being kept for some valid reason, clear communication of these reasons back to the end user allows for all parties to make informed decisions and use the appropriate channels for complaints." },
            { id: "R42", name: "Configurable deletion", type: "Reduce", desc: "Implementers are advised to allow the system actions that occur after a delete to be configurable, such that system flexibility is sufficient to address any verifiable credential use case." }
        ],
        elements: ["E1", "P8", "P7", "P9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();
