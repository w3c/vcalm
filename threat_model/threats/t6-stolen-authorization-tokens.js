(function () {
    var threat = {
        id: "T6",
        name: "Stolen Authorization Tokens",
        desc: "A malicious entity exfiltrates authorization tokens for any involved process, using them to spoof authenticated clients. Depending on the affected process this could lead to any number of attacks such as: providing malicious interaction URLs, modifying workflows, changing issuance or verification policies, corrupting or spoofing credential statuses, etc.",
        response: [
            { id: "R9", name: "Cryptographic Sender Binding via DPoP", type: "Reduce", desc: "Enforce Demonstrating Proof-of-Possession (DPoP) if using OATH2 or mutual Transport Layer Security (mTLS) client binding to ensure security tokens are useless if extracted from the originating environment." },
            { id: "R23", name: "Maintain Modern Operational Security", type: "Reduce", desc: "Ensure systems that have a reason to store any form of user related data have the most up to date security and surrounding policy practices." }
        ],
        elements: ["P1", "P3", "P4", "P5", "P6", "P7", "P8", "P9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();