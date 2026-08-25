(function () {
    var threat = {
        id: "T33",
        name: "Verifier “phones home” about specific verifiable credential",
        desc: "It is considered a bad privacy practice for a verifier to contact an issuer about a specific verifiable credential. This practice is known as \"phoning home\" and can result in a mismatch in privacy expectations between holders, issuers, verifiers, and other parties expressed in a verifiable credential. Phoning home enables issuers to correlate unsuspecting parties with the use of certain verifiable credentials which can violate privacy expectations that each entity might have regarding the use of those credentials. For example, what is expected by the holder to be a private interaction between them and the verifier becomes one where the issuer is notified of the interaction.",
        response: [
            { id: "R30", name: "Use privacy-respecting status list", type: "Reduce", desc: "There are some interactions where contacting the issuer in a privacy-preserving manner upholds the privacy expectations of the holder. For example, contacting the issuer to get revocation status information in a privacy-respecting manner, such as through a status list that provides group privacy can be acceptable as long as the issuer is not able to single out which verifiable credential is being queried based on the retrieval of the status list. For more information on one such mechanism see the Bitstring Status List v1.0 specification." },
            { id: "R31", name: "Make use of Oblivious HTTP and aggressive cashing of results", type: "Reduce", desc: "Verifiers are urged to not \"phone home\" in ways that will create privacy violations. When retrieving content that is linked from a verifiable credential, using mechanisms such as Oblivious HTTP and aggressively caching results can improve the privacy characteristics of the ecosystem." }
        ],
        elements: ["P4", "P6", "F14", "P9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure"
    };
    window.ThreatModel.register(threat);
})();
