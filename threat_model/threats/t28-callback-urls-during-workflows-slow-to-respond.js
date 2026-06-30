(function () {
    var threat = {
        id: "T28",
        name: "Callback URLs During Workflows Slow to Respond",
        desc: "Downstream consumer webhooks or internal endpoints process calls slowly, filling internal worker pools and triggering cascading system timeouts.",
        response: [],
        elements: ["P5", "F7", "F12", "F18", "F15", "F2", "P1", "P4", "P7", "P6"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();