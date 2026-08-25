(function () {
    var threat = {
        id: "T19",
        name: "Interaction URLs Leak Personal IPs",
        desc: "Direct network connections to interaction URLs expose user IP metrics and geographic data to backend servers during verification checks.",
        response: [
            { id: "R22", name: "URL Proxies and Mixnets", type: "Reduce", desc: "Use interaction URL proxies, mixnets, or interaction URL locations where the population using the interaction URLs is large and diverse." }
        ],
        elements: ["E1", "F6", "P4"],
        tags: ["privacy"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();