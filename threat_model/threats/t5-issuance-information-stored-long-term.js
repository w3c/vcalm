(function () {
    var threat = {
        id: "T5",
        name: "Issuance Information Stored Long-Term",
        desc: "Private processing logs, transaction metadata, or raw PII related to credential issuance are preserved by the issuer for longer than needed, creating an unintentional honey pot that could be the target for attackers.",
        response: [
            { id: "R8", name: "Data Minimization", type: "Reduce", desc: "Institute use case appropriate zero-retention rules that securely delete transaction artifacts and raw client Personally Identifiable Information (PII) identifiers." },
            { id: "R23", name: "Maintain Modern Operational Security", type: "Reduce", desc: "Ensure systems that have a reason to store any form of user related data have the most up to date security and surrounding policy practices." },
            { id: "R24", name: "Secure Data Vaults", type: "Transfer", desc: "In the case that some user data needs to be saved for an appropriate legal reason, ensure that the data is not stored with the primary issuance software with minimal or no publicly accessible endpoints." }
        ],
        elements: ["P5", "P7"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();