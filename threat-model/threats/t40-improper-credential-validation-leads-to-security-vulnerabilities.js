(function () {
    var threat = {
        id: "T40",
        name: "Improper Credential Validation Leads to Security Vulnerabilities",
        desc: "In most cases, simply verifying the proof might not be sufficient to properly handle the received data. Improper validation will often lead to security vulnerabilities.",
        response: [
{ id: "R44", name: "Additional Credential Validation", type: "Reduce", desc: "Verifier services are expected to configure additional validation steps based on their use cases. To define such additional validations, implementers can refer to resources such as the Resource Integrity and Contexts and Vocabularies sections in [[[?VC-DATA-INTEGRITY]]], where further information can be found about context handling and integrity verification. Additional validation steps can be reported when returning a verification response object, through the problem details." }
        ],
        elements: ["E1", "P5", "P4"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering"
    };
    window.ThreatModel.register(threat);
})();
