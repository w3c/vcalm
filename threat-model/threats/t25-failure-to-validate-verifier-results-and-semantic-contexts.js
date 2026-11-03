(function () {
    var threat = {
        id: "T25",
        name: "Failure to Validate Verifier Results and Semantic Contexts",
        desc: "Verification components fail to parse nested semantic outcomes (like specialized `revoked=true` fields) or blindly fetch untrusted external JSON-LD schemas, causing unexpected remote execution patterns.",
        response: [
            { id: "R52", name: "Pre-caching and Pre-fetching", type: "Reduce", desc: "In production environments, pre-cache JSON-LD contexts and pre-fetch any needed keys where possible to prevent untrusted or malicious contexts or keys from being pulled during runtime."},
            { id: "R53", name: "Disable Dynamic Context Fetching", type: "Avoid", desc: "Disable any dynamic fetching of JSON-LD contexts in production environments to ensure only trusted contexts are used." }
        ],
        elements: ["P5", "F13", "P6", "F14", "P9", "F15"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Elevation of Privilege"
    };
    window.ThreatModel.register(threat);
})();