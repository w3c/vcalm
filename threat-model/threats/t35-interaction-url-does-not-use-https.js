(function () {
    var threat = {
        id: "T35",
        name: "Interaction URL does not use HTTPS",
        desc: "Using protocol schemes that are not rooted in the HTTPS trust model requires separate encryption protocol, key management, and trust models to be used, which are often less broadly developed and deployed and require much more development and analysis to determine the threat and privacy model.",
        response: [
            { id: "R36", name: "Same origin trust model", type: "Transfer", desc: "The HTTPS URL used in an interaction firmly establishes trust in the interaction based on the existing and well understood same-origin trust model used by browsers." },
            { id: "R37", name: "Establish trust upfront", type: "Transfer", desc: "The initial URL provided establishes trust such that subsequent protocols used in the interaction can be simply and safely delegated or outsourced to other systems, some of which can be in a separate domain." },
            { id: "R38", name: "Use domain name for consent", type: "Transfer", desc: "Graphical interfaces that need to gather consent can use domain names, which are understood well enough by the general population to combat phishing attacks." },
            { id: "R39", name: "Protocol-specific elevation for stronger verification", type: "Transfer", desc: "Protocols that require stronger verification of any party can use protocol-specific mechanisms, such as verifiable credentials, to verify the holder, issuer, or verifier during a particular protocol exchange." }
        ],
        elements: ["D2", "F3", "P4", "P2", "P1"],
        taxonomyName: "STRIDE",
        taxonomyClass: ""
    };
    window.ThreatModel.register(threat);
})();
