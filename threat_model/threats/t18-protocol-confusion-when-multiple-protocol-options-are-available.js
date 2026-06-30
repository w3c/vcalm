(function () {
    var threat = {
        id: "T18",
        name: "Protocol Confusion When Multiple Protocol Options Are Available",
        desc: "A mixed profile deployment environment allows an adversary to intentionally submit legacy or insecure alternative request versions, tricking the coordinator into lowering validation rules.",
        response: [
            { id: "R18", name: "Interface Deprecation and Secure Fallback Disabling", type: "Reduce", desc: "Hardcode execution restrictions that block processing steps for legacy or unvetted fallback patterns, enforcing a strict protocol specification validation policy." }
        ],
        elements: ["D4", "P4", "F6", "P1"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering"
    };
    window.ThreatModel.register(threat);
})();