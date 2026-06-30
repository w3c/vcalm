(function () {
    var threat = {
        id: "T7",
        name: "Revocation List Unavailable",
        desc: "Whether because an issuing business goes insolvent, permanently shuts down its operations, or simply decides to stop supporting a system, the status service becomes unreachable breaking verification logic across the ecosystem.",
        response: [
            { id: "R10", name: "Decentralized Content-Addressable Status Frameworks", type: "Transfer", desc: "Transition status infrastructure from synchronous live lookup services to signed, content-addressable registries that can be cached on decentralized storage systems like InterPlanetary File System (IPFS) or Content Delivery Networks (CDNs)." },
            { id: "R25", name: "Verifier Acceptance of Unavailable Status Service", type: "Accept", desc: "Not all businesses or services will care if their issued credentials are usable indefinitely and some may actively choose to make this service unavailable. Verifier software, along with any process handling business logic related to verification should handle this case and not rely on statuses being always available." }
        ],
        elements: ["P6", "F14", "P1", "P2"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Denial of Service"
    };
    window.ThreatModel.register(threat);
})();