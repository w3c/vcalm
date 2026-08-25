(function () {
    var threat = {
        id: "T40",
        name: "Improper credential validation leads to security vulnerabilities",
        desc: "In most cases, simply verifying the proof might not be sufficient to properly handle the received data. Improper validation will often lead to security vulnerabilities.",
        response: [
            { id: "R44", name: "Additional validation", type: "Reduce", desc: "Verifier services are expected to configure additional validation steps based on their use cases. To define such additional validations, implementers can refer to specifications such as Section 2.3: Resource Integrity and Section 2.4: Contexts and Vocabularies in the Verifiable Credential Data Integrity 1.0 specification where further information can be found about context handling and integrity verification. Additional validation steps can be accounted for when returning a verification response object, through the problem details." }
        ],
        elements: ["E1", "P5", "P4"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();
