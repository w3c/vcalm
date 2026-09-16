(function () {
    var threat = {
        id: "T38",
        name: "Status Information, Mishandled upon Credential Deletion, Leads to Holder Confusion",
        desc: "When deleting a verifiable credential, handling of its status information needs to be considered. For instance, some use cases might call for the revocation and suspension bits of a particular verifiable credential to be set upon deletion of that verifiable credential, such that any sort of status check for the deleted credential fails, and use of the credential is thereby halted, without immediately making the holder aware of these status changes. This can lead to frustration and confusion when the holder later attempts to use the credential for a purpose they deem to be valid.",
        response: [
            { id: "R41", name: "Establish Clear Policy Regarding Credential Deletion", type: "Transfer", desc: "Often confusion and frustration about why data is being retained is a result of a lack of communication between the various parties involved. If data is being retained for some valid reason, clear communication of these reasons back to the end user allows for all parties to make informed decisions and use the appropriate channels for complaints." },
            { id: "R42", name: "Configurable Deletion", type: "Reduce", desc: "Implementers are advised to allow the system actions that occur after a deletion to be configurable, such that system flexibility is sufficient to address any verifiable credential use case." }
        ],
        elements: ["E1", "P8", "P7", "P9"],
        tags: ["privacy"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();
