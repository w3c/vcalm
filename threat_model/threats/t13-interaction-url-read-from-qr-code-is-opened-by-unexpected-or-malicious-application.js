(function () {
    var threat = {
        id: "T13",
        name: "Interaction URL read from QR Code is opened by unexpected or malicious application",
        desc: "A rogue app present on the holder’s device registers matching protocol handlers, capturing deep link output from scanned QR strings and takes control of the interaction.",
        response: [
            { id: "R12", name: "Cryptographic Application Link Pinning", type: "Eliminate", desc: "Holder coordinator processes should run deep routing configurations (Universal Links on iOS or Android App Links) to stop link interceptions." }
        ],
        elements: ["D2", "F3", "F4", "F5", "P1"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering"
    };
    window.ThreatModel.register(threat);
})();