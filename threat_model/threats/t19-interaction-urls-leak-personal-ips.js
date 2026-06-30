(function () {
    var threat = {
        id: "T19",
        name: "Interaction URLs Leak Personal IPs",
        desc: "Direct network connections to interaction URLs expose user IP metrics and geographic data to backend servers during verification checks.",
        response: [],
        elements: ["E1", "F6", "P4"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();