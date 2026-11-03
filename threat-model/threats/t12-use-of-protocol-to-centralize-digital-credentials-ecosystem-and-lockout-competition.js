(function () {
    var threat = {
        id: "T12",
        name: "Use of Protocol to Centralize Digital Credentials Ecosystem and Lockout Competition",
        desc: "Market-dominant platforms choose to only offer their chosen protocol for credential interactions, leading to many holder implementations omitting other protocols.",
        response: [
            { id: "R54", name: "Desire for Interoperability", type: "Reduce", desc: "Through the interaction mechanism, VCALM enables implementers to choose which protocols they want to support. If any share of a given market chooses to make use of a particular protocol, implementers will have pressure to support that protocol to ensure the highest number of users possible can make use of their system or service."}
        ],
        elements: ["D4", "F6", "P4", "P1"],
        tags: ["market competition"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();