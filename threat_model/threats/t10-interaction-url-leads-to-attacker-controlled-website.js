(function () {
    var threat = {
        id: "T10",
        name: "Interaction URL Leads to Attacker-Controlled Website",
        desc: "Malicious interaction URL directs users onto phishing, scam, or otherwise unwanted sites built to harvest private data.",
        response: [
            { id: "R5", name: "Interaction URL Origin Validation and Elevation", type: "Reduce", desc: "Any software that is expecting to consume an interaction URL should carefully consider their policies around interaction URL origins not matching. Implementers should consider overriding any user settings about automatically engaging with interaction URLs in the case of an origin mismatch and elevate the decision about the engagement to the user, or may choose to simply block such interactions from occurring." }
        ],
        elements: ["D2", "P4", "P2", "F3", "F4", "F5", "P1"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();