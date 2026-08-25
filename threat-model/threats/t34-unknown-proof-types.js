(function () {
    var threat = {
        id: "T34",
        name: "Unknown proof types",
        desc: "Holder coordinator implementations, such as digital wallet software, can receive and store verifiable credentials that include proofs that are not understood by the software.",
        response: [
            { id: "R32", name: "Remove unsupported proofs prior to presentation", type: "Eliminate", desc: "A verifiable credential with several proofs, some of which the implementation understands and others that it does not, can be presented by the implementation provided that the proof of choice is understood by the implementation and the others are removed prior to presentation. Implementations maintain allow lists of understood proofs and ensure that any proofs not present are stripped prior to presentation." },
            { id: "R33", name: "Holder as interoperability conduit", type: "Transfer", desc: "It is important for implementers to understand that in the three party model, the holder coordinator acts as a conduit between the issuer and the verifier, enabling interoperability between the two even if/when the holder coordinator doesn't necessarily implement verification of certain proofs. As an example in another space: \"Web browsers were able to download and store PDF files prior to adding their own PDF-reader functionality\" — this kind of decentralized innovation, interoperability, and progressive enhancement is important in the three party model and more generally in scalable, decentralized ecosystems. It is also important to help reduce centralization by not forcing people to adopt specific new and different software just to store a verifiable credential that has at least one proof on it that their current software does not (yet) understand." },
            { id: "R34", name: "Use unknown proofs as adoption signals", type: "Reduce", desc: "Implementations can use the presence of unknown proofs as potential adoption signals in a decentralized ecosystem." },
            { id: "R35", name: "Only present proofs that are well understood", type: "Reduce", desc: "A holder coordinator might be able to present some proofs even when it does not have the software to verify them, but this needs to be understood with certainty, not guessed. That is, when adding a copy of a stored verifiable credential to a presentation, holder software needs to remove any proofs that it does not explicitly know it can safely present. Any proofs that software does explicitly know it can safely present can remain. For example, a digital wallet that can verify an ecdsa-rdfc-2019 proof, but not an ecdsa-jcs-2019 proof, can still present either. Other proofs, such as those that offer selective disclosure and / or unlinkable disclosure features require transformation (that is, a base proof is transformed to a derived proof plus a \"reveal document\") and, therefore, a wallet will not be able to present these proofs unless the wallet has implemented the procedures for deriving a proof. It is vital that a wallet not present a base proof by accident, as it might include information that is secret to the holder." }
        ],
        elements: ["P1", "F12", "F19", "P5", "P7", "P6", "F16", "F13"],
        taxonomyName: "STRIDE",
        taxonomyClass: ""
    };
    window.ThreatModel.register(threat);
})();
