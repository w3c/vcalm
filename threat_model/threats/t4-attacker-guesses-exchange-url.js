(function () {
    var threat = {
        id: "T4",
        name: "Attacker Guesses Exchange URL",
        desc: "Exchange URLs use predictable structures with discoverable workflow IDs, allowing automated scripts to only need to guess a particular exchange ID to effectively hijack a given exchange.",
        response: [
            { id: "R6", name: "Obfuscated Exchange ID Generation", type: "Reduce", desc: "When generating an exchange ID, utilize random identifiers such as a randomly generated UUID." },
            { id: "R7", name: "Use Reasonable Time-to-Live", type: "Reduce", desc: "Assign the appropriate lifespan to a particular exchange URL for the given use case." }
        ],
        elements: ["P5", "F7", "F12", "D9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();