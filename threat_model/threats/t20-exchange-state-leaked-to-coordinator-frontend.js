(function () {
    var threat = {
        id: "T20",
        name: "Exchange State Leaked to Coordinator Frontend",
        desc: "Granular internal processing states bleed out into frontend responses, revealing sensitive system execution parameters to local client scraping or cross-site threats.",
        response: [
            { id: "R19", name: "Strict Exchange State Filtering", type: "Reduce", desc: "Enforce explicit layers in the system API boundaries to isolate backend state tracking structures from public consumer schemas." }
        ],
        elements: ["P4", "F23", "P5"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();