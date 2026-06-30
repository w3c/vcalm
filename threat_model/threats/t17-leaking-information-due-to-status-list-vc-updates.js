(function () {
    var threat = {
        id: "T17",
        name: "Leaking Information Due to Status List VC Updates",
        desc: "External observers consistently query status services to discover some information about the system issuing credentials, whether that be the rate at which they are issued, how many get issued, or in extreme cases for little used systems, who was issued which credential when.",
        response: [
            { id: "R17", name: "Deterministic Batching Schedules and State Padding", type: "Reduce", desc: "Push state modifications to public status lists on strict, standardized scheduler intervals instead of streaming real-time alerts, filling unallocated tracking bits with random placeholder configurations." },
            { id: "R22", name: "Incorporate Fake Data", type: "Reduce", desc: "Make use of random assignment of fake credentials to a status list, at random times, to obfuscate the true number of credentials that have been assigned and the rate at which credentials are being issued." }
        ],
        elements: ["E1", "C5", "P7", "F17", "P8", "F6", "F14", "P9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();