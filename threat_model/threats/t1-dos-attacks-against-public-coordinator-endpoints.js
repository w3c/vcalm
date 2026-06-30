(function () {
    var threat = {
        id: "T1",
        name: "DoS Attacks Against Public Coordinator Endpoints",
        desc: "Attackers perform a denial of service attack against a public coordinator endpoint(s), causing severe availability degradation for legitimate clients.",
        response: [
            { id: "R1", name: "Volumetric Rate Limiting and Web Application Firewall Architecture", type: "Reduce", desc: "Deploy an enterprise Web Application Firewall (WAF) coupled with strict Internet Protocol (IP) and token-based rate limiting thresholds at the Application Programming Interface (API) Gateway to drop volumetric attack traffic." },
            { id: "R2", name: "Event-Driven Architecture and Async Message Queues", type: "Reduce", desc: "Decouple direct synchronous processing loops by routing transactional requests into asynchronous, managed worker queues to shield critical database threads from flooding." }
        ],
        elements: ["P4"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();