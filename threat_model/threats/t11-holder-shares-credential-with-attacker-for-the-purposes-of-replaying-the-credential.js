(function () {
    var threat = {
        id: "T11",
        name: "Holder Shares Credential with Attacker for the Purposes of Replaying the Credential",
        desc: "Social engineering tricks a user into presenting an active Verifiable Credential to an adversarial verifier instance, which then replays the static payload string to a real provider.",
        response: [
            { id: "R13", name: "Asymmetric Cryptographic Holder Binding", type: "Reduce", desc: "Require cryptographic verification proofs during individual presentations, rendering useless any static transaction copies that don't hold the operational private keys." },
            { id: "R14", name: "Domain-Bound Ephemeral Verification Challenges", type: "Reduce", desc: "Embed unique, strict single-use cryptographic nonces (random numbers used once) combined with target audience domain pins inside every transaction request." }
        ],
        elements: ["F12", "P5", "F13", "P6"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();