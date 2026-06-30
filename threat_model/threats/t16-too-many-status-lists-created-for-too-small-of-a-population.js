(function () {
    var threat = {
        id: "T16",
        name: "Too Many Status Lists Created for Too Small of a Population",
        desc: "Deployed status lists map to tightly scoped population pools, reducing user tracking privacy and enabling passive metadata linkage.",
        response: [
            { id: "R16", name: "Privacy Preserving Minimum Sizing Constraints", type: "Reduce", desc: "Enforce systemic validation requirements ensuring all public status lists scale above the minimum index counts to maintain k-anonymity privacy protections." },
            { id: "R22", name: "Incorporate Fake Data", type: "Reduce", desc: "Make use of random assignment of fake credentials to a status list, at random times, to obfuscate the true number of credentials that have been assigned and the rate at which credentials are being issued." }
        ],
        elements: ["P8", "P9", "P7", "F17", "F14"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();