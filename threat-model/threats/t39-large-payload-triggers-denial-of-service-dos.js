(function () {
    var threat = {
        id: "T39",
        name: "Large payload triggers denial of service (DoS)",
        desc: "Larger transactions can trigger DoS incidents.",
        response: [
            { id: "R43", name: "Configure payload size at instance level", type: "Reduce", desc: "It's recommended to configure the payload size accepted by endpoints at an instance level." }
        ],
        elements: ["P2", "P1", "P4", "P5", "F12", "F19", "P3", "F9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();
