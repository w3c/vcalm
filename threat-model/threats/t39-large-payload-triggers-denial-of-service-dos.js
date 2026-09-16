(function () {
    var threat = {
        id: "T39",
        name: "Large Payload Triggers Denial of Service (DoS)",
        desc: "Large transaction payloads can trigger DoS incidents.",
        response: [
            { id: "R43", name: "Configure Payload Size at Instance Level", type: "Reduce", desc: "It's recommended to configure the payload size accepted by endpoints at an instance level." }
        ],
        elements: ["P2", "P1", "P4", "P5", "F12", "F19", "P3", "F9"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();
