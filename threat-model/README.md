# VCALM Threat Model

This folder holds the threat model for the
[Verifiable Credential API for Lifecycle Management (VCALM)](https://w3c.github.io/vcalm/)
specification. It is published as a W3C Group Note with
[ReSpec](https://respec.org/docs/).

- Editor's Draft: https://w3c.github.io/vcalm/threat-model/
- Method: the [Threat Modeling Guide](https://www.w3.org/TR/threat-modeling-guide/)

The VCALM specification (`../index.html`) links to individual threats by their
anchors in this document.

## How the threat model is built

The document is `index.html`. It holds the prose sections (scope, the data
flow diagram and its description, and the element tables) and the ReSpec
configuration.

The threats are not written in `index.html`. Each threat is a data file in the
`threats/` folder, and a small rendering library turns the data files into the
threat list and the threat details when ReSpec loads the page.

| File | Purpose |
|---|---|
| `index.html` | The threat model document and its ReSpec configuration |
| `vcalm-threat-model.png` | The data flow diagram |
| `threats/threat-model.js` | Rendering library. Registers threats and renders them in a ReSpec `preProcess` step |
| `threats/threat-model.css` | Layout for the threat list and threat details |
| `threats/outline.js` | Groups threats into categories, by threat ID |
| `threats/tN-*.js` | One file per threat |

## Threat files

Each threat file registers one threat:

```js
(function () {
    var threat = {
        id: "T35",
        name: "Interaction URL Does Not Use HTTPS",
        desc: "Using protocol schemes that are not rooted in the HTTPS trust model ...",
        response: [
            { id: "R36", name: "Same Origin Trust Model", type: "Transfer", desc: "The HTTPS URL used in an interaction ..." }
        ],
        elements: ["D2", "F3", "P4", "P2", "P1"],
        tags: ["security"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();
```

- `id` is the threat number (`T1`, `T2`, and so on). Each response has its own
  ID (`R1`, `R2`, and so on).
- `elements` lists the data flow diagram elements the threat applies to, such
  as entities (`E`), processes (`P`), data flows (`F`) and data (`D`). These
  are defined in the element tables in `index.html`.
- The file name is the lowercase threat ID, then the threat name with spaces
  and punctuation replaced by hyphens. For example, threat T35 above is in
  `t35-interaction-url-does-not-use-https.js`. This matches the anchor the
  threat gets in the rendered document.

## Adding or changing a threat

1. Add or edit the file in `threats/`. For a new threat, use the next unused
   threat ID.
2. For a new threat, add a `script` tag for the file at the end of the list in
   `index.html`, and add the threat ID to a category in `threats/outline.js`.
3. If you rename a threat, rename its file to match, and update any links to
   the old anchor in the VCALM specification (`../index.html`).
4. Open `index.html` in a browser and check that the threat shows up in both the
   list and the details.

Discussion of the threat model happens in the
[w3c/vcalm issues](https://github.com/w3c/vcalm/issues?q=is%3Aissue%20label%3Athreat-model),
under the `threat-model` label.
