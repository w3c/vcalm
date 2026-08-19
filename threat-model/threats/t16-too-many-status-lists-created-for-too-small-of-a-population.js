(function () {
    var threat = {
        id: "T16",
        name: "Too Many Status Lists Created for Too Small of a Population",
        desc: "Deployed status lists map to tightly scoped population pools, reducing user tracking privacy and enabling passive metadata linkage.",
        response: [
            { id: "R16", name: "Privacy-Preserving, Minimum-Sizing Constraints", type: "Reduce", desc: "Enforce systemic validation requirements to ensure that all public status lists scale above the minimum index counts needed to maintain k-anonymity privacy protections." },
        ],
        elements: ["P8", "P9", "P7", "F17", "F14"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();