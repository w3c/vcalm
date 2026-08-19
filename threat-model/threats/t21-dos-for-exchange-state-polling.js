(function () {
    var threat = {
        id: "T21",
        name: "DoS for Exchange State Polling",
        desc: "High frequencies of client state queries block active thread loops on internal database engines, reducing API capacity and crashing systems.",
        response: [
            { id: "R1", name: "Volumetric Rate Limiting and WAF Architecture", type: "Reduce", desc: "Deploy an enterprise Web Application Firewall (WAF) coupled with strict Internet Protocol (IP) and token-based rate limiting thresholds at the Application Programming Interface (API) Gateway to drop volumetric attack traffic." }
        ],
        elements: ["P4", "F23", "P5"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();