(function () {
    var threat = {
        id: "T30",
        name: "Issuance Request and/or Delivery Made by Third Party",
        desc: "There is no guarantee nor general requirement that a request for the issuance of a verifiable credential is being made by a subject of the credential. Similarly, there is no guarantee that such a credential is being delivered to a wallet controlled by a subject of that credential. Workflows allowing such loosely coupled behaviors are generally considered to be a benefit of the verifiable credential ecosystem, though it is important that issuers, holders, and verifiers be aware of the possibilities.",
        response: [
            { id: "R45", name: "Cryptographic Delegation", type: "Reduce", desc: "Use of cryptographically bound delegation techniques, such as zCaps, allow for third parties to act on behalf of the subject." }
        ],
        elements: ["F1", "F19", "P1", "P4", "P5"],
        tags: ["security", "privacy"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();
