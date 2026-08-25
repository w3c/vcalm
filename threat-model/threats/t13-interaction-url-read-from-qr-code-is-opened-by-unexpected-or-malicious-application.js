(function () {
    var threat = {
        id: "T13",
        name: "Interaction URL Read from QR Code is Opened by Unexpected or Malicious Application",
        desc: "A rogue app present on the [=holder's=] device registers matching protocol handlers, capturing deep link output from scanned QR strings, and takes control of the interaction.",
        response: [
            { id: "R12", name: "Cryptographic Pinning of Application Links", type: "Eliminate", desc: "Holder coordinator processes should run deep routing configurations (Universal Links on iOS, or Android App Links) to stop link interceptions." }
        ],
        elements: ["D2", "F3", "F4", "F5", "P1"],
        tags: ["security", "privacy"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();