(function () {
    var threat = {
        id: "T2",
        name: "Attacker Bypasses Internal Security to Issue VC to Attacker",
        desc: "An attacker bypasses internal architectural or network boundaries to directly invoke backend credential issuance services, forging or granting unauthorized credentials to themselves.",
        response: [
            { id: "R3", name: "Zero Trust and mTLS Execution", type: "Reduce", desc: "Implement strict network segmentation and mandate mutual Transport Layer Security (mTLS) with cryptographically validated identity tokens for all internal service-to-service APIs." },
            { id: "R4", name: "Granular Privilege Scoping", type: "Reduce", desc: "Enforce explicit, fine-grained access control scopes combined with server-side validation rules to verify the identity and permission layout of any invoking resource." }
        ],
        elements: ["P7", "F16"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Elevation of Privilege, Spoofing"
    };
    window.ThreatModel.register(threat);
})();