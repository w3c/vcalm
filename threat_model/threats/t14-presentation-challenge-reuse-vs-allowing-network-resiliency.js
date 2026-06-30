(function () {
    var threat = {
        id: "T14",
        name: "Presentation Challenge Reuse vs Allowing Network Resiliency",
        desc: "Reusing cryptographic challenge tokens to bridge unreliable mobile connections allows network sniffers to capture presentation payloads and execute replay attacks.",
        response: [
            { id: "R14", name: "Domain-Bound Verification Challenges", type: "Reduce", desc: "Embed unique, strict single-use cryptographic challenges combined with target audience domain pins inside  presentation request and response objects." }
        ],
        elements: ["P1", "P5", "F7", "F8", "F12", "F19"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();