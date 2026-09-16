(function () {
    var threat = {
        id: "T35",
        name: "Interaction URL Does Not Use HTTPS",
        desc: "Using protocol schemes that are not rooted in the HTTPS trust model requires separate encryption protocol, key management, and trust models to be used, which are often less broadly developed and deployed and require much more development and analysis to determine the threat and privacy model.",
        response: [
            { id: "R36", name: "Same Origin Trust Model", type: "Transfer", desc: "The HTTPS URL used in an interaction firmly establishes trust in the interaction based on the existing and well understood same-origin trust model used by browsers." },
            { id: "R37", name: "Establish Trust Upfront", type: "Transfer", desc: "The URL of the coordinator application that the authenticated holder is engaging within establishes trust such that subsequent protocols used in the interaction may be simply and safely delegated or outsourced to other systems, some of which may be in a separate domain." },
            { id: "R38", name: "Use Domain Name for Consent", type: "Transfer", desc: "Graphical interfaces that need to gather consent can use domain names, which are understood well enough by the general population to combat phishing attacks." },
            { id: "R39", name: "Protocol-Specific Elevation for Stronger Verification", type: "Transfer", desc: "Protocols that require stronger verification of any party can use protocol-specific mechanisms, such as verifiable credentials, to verify the holder, issuer, or verifier during a particular protocol exchange." }
        ],
        elements: ["D2", "F3", "P4", "P2", "P1"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();
