(function () {
    var threat = {
        id: "T32",
        name: "Malicious entity acts on behalf of incapable party",
        desc: "Some subjects such as a new born baby, a pet, or a person with dementia, are incapable of acting on their own behalf. In these cases requests may be made on behalf of a subject with no cryptographic delegation possible.",
        response: [
            { id: "R29", name: "Additional validation steps in workflow", type: "Reduce", desc: "In cases where the requesting party is not the intended subject of the action being requested, the workflow in question can include additional validation steps that ask the requesting party for additional information." }
        ],
        elements: ["F1", "F19", "P1", "P4"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();
