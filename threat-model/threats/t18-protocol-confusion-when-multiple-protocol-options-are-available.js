(function () {
    var threat = {
        id: "T18",
        name: "Protocol Confusion When Multiple Protocol Options Are Available",
        desc: "A mixed-profile deployment environment allows an adversary to intentionally submit legacy or insecure alternative versions of requests, tricking the coordinator into lowering validation rules.",
        response: [
            { id: "R18", name: "Deprecating Interfaces and Disabling Secure Fallbacks", type: "Reduce", desc: "Hardcode execution restrictions that block processing steps for legacy or unvetted fallback patterns, enforcing a strict validation policy for protocol specifications." }
        ],
        elements: ["D4", "P4", "F6", "P1"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering"
    };
    window.ThreatModel.register(threat);
})();