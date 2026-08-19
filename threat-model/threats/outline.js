(function () {
    var threatCategories = [
        {
            name: "Target Threats",
            id: "threat-model-target-threats",
            threats: ["T1", "T4", "T5", "T6", "T17", "T19", "T21"],
        },
        {
            name: "Implementation Threats",
            id: "threat-model-implementation-threats",
            threats: ["T2", "T3", "T9", "T14", "T15", "T16", "T18", "T20", "T22", "T23", "T24", "T25", "T26", "T27"],
        },
        {
            name: "External Threats",
            id: "threat-model-externnal-threats",
            threats: ["T8", "T10", "T11", "T12", "T13", "T29"],
        },
        {
            name: "Dependency Threats",
            id: "threat-model-dependency-threats",
            threats: ["T7", "T28"],
        },
    ];

    window.ThreatModel.registerCategories(threatCategories);
})();
