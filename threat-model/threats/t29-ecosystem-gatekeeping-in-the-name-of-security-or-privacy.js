(function () {
    var threat = {
        id: "T29",
        name: "Ecosystem Gatekeeping in the Name of Security or Privacy",
        desc: "Primary ecosystem actors choose to restrict their support of particular protocols or data formats in the name of security or privacy whereas in reality they are trying to push the ecosystem to adopt their solution.",
        response: [
            {id: "R50", name: "Multi-protocol Support and Extensibility ", type: "Reduce", desc: "The interaction mechanism in VCALM, which is used to bootstrap a user into an interaction, allows for implementers to advertise the set of interaction protocols they wish to use and provides a way for the user and service to negotiate a mutually understood protocol for an interaction. Since the supported set of protocols is decided by each implementation independently no single or set of parties can directly prescribe what protocols are used in an interaction."}
            ],
        elements: ["E1"],
        tags: ["market competition"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();