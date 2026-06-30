(function () {
    var threat = {
        id: "T9",
        name: "Wrong Authorization Scope",
        desc: "Access tokens contain overly wide authorization permission settings, allowing a compromised unprivileged sub-component to invoke unintended functions.",
        response: [
            { id: "R4", name: "Granular Least Privilege Scoping", type: "Reduce", desc: "Enforce explicit, fine-grained access control scopes combined with server-side validation rules to verify the identity and permission layout of any invoking resource via Role-Based Access Control (RBAC)." }
        ],
        elements: ["P3", "P5", "P6", "P7", "P8", "P9"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Elevation of Privilege"
    };
    window.ThreatModel.register(threat);
})();