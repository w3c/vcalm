(function () {
    var threat = {
        id: "T8",
        name: "Issuer Authentication Leads to Incorrect VC Being Issued to Attacker",
        desc: "Gaps or vulnerabilities within the initial enrollment or proofing layer let an attacker successfully spoof an identity verification checkpoint, resulting in a legitimate VC mapped to an illegitimate owner.",
        response: [
            { id: "R11", name: "Use Case Appropriate Identity Proofing Integration", type: "Reduce", desc: "Implementers should consider their use case carefully and implement identity assurance that fits the potential harms that may come from this kind of spoofing attack without unduly requiring the revelation of user PII beyond what is reasonable for the use case." }
        ],
        elements: [],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();