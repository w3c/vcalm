(function () {
    var threat = {
        id: "T25",
        name: "Failure to Validate Verifier Results and Semantic Contexts",
        desc: "Verification components fail to parse nested semantic outcomes (like specialized \"revoked=true\" fields) or blindly fetch untrusted external JSON-LD schemas, causing unexpected remote execution patterns.",
        response: [],
        elements: ["P5", "F13", "P6", "F14", "P9", "F15"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();