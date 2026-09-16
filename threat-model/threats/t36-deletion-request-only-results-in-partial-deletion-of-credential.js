(function () {
    var threat = {
        id: "T36",
        name: "Deletion Request Only Results in Partial Deletion of Credential",
        desc: "The APIs provided by this specification enable the deletion of verifiable credentials and verifiable presentations from storage services. In some cases, a record may be only partially deleted which means that some or all of the original information continues to be stored. This mode of operation can be useful if there are audit requirements for all credentials and/or presentations over a particular time period, or if recovering an original credential might be a useful feature to provide but can lead to unintended persistence of records for longer than necessary.",
        response: [
            { id: "R40", name: "Have a Good Use Case for Only Partially Deleting a Record", type: "Reduce", desc: "When choosing how to implement the function of deleting a verifiable credential, consider carefully the various use cases that may warrant the continued storage of some or all of the data being deleted against the potential harm should the data ever be compromised." },
            { id: "R42", name: "Configurable Deletion", type: "Reduce", desc: "Implementers are advised to allow the system actions that occur after a deletion to be configurable, such that system flexibility is sufficient to address any verifiable credential use case." }
        ],
        elements: ["E1", "C5", "C6"],
        tags: ["privacy"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();
