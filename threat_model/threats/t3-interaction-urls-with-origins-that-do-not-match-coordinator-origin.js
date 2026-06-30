(function () {
    var threat = {
        id: "T3",
        name: "Interaction URLs with Origins That Do Not Match Coordinator Origin",
        desc: "A coordinator provides an interaction URL whose web origin deviates from the coordinator host origin. At best in a non-malicious application this goes unnoticed by the user, at worse it causes a user confusion when they see they are being redirected away from the website they thought they were on, possibly cancelling the interaction. With a malicious actor this would enable cross-site tracking or session hijacking exploits.",
        response: [
            { id: "R5", name: "Interaction URL Origin Validation and Elevation", type: "Reduce", desc: "Any software that is expecting to consume an interaction URL should carefully consider their policies around interaction URL origins not matching. Implementers should consider overriding any user settings about automatically engaging with interaction URLs in the case of an origin mismatch and elevate the decision about the engagement to the user, or may choose to simply block such interactions from occurring." }
        ],
        elements: ["P2", "P4", "F3", "D2"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering"
    };
    window.ThreatModel.register(threat);
})();