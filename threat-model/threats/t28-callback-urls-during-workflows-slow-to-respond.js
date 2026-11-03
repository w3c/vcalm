(function () {
    var threat = {
        id: "T28",
        name: "Callback URLs During Workflows Slow to Respond",
        desc: "Downstream consumer webhooks or internal endpoints process calls slowly, filling internal worker pools and triggering cascading system timeouts.",
        response: [{ id: "R51", name: "Callbacks as Notification Signals", type: "Reduce", desc: "The VCALM's callback design is for them to behave as notification signals that are non-blocking, where failures do not cascade or block advancing the exchange. Implementations that stray from this design intention of VCALM need to make their own evaluation of this threat." }],
        elements: ["P5", "F7", "F12", "F18", "F15", "F2", "P1", "P4", "P7", "P6"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();