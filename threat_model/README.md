# Respec-Threats

A ReSpec rendering library for threat models

# Use 

To use this library, add the library files to your repo, then add threat
definition files, and finally and update your spec's html to use them.

## Library Files

The library files you'll want to add:

1. `threats/threat-model.js` the javascript that handles parsing the threats and
   rendering them in the spec.
2. `threats/threat-model.css` the css file that handles the layout for the
   threats and table of contents. 

## Threat Definition Files

The threat definition files you'll want to add:
1. Individual threat.js files (in the threats folder in the example) as
   described in the example spec.
2. `threats/outline.js` This defines the categories for organizing both the
   table of contents and the threat details themselves. Any number of categories
   can be defined, with any number of threats in each, with any name for each
   category. The outline uses just the short form ID for each threat, e.g., "T1"
   or "T5".

## HTML updates

1. Add a script tag for threat-model.js. This MUST be before the Respec Config
   block *and* the other Respec-Threats javascript tags.

```html
  <script src="threats/threat-model.js"></script> <!-- must precede the respec config-->
```

1. Add suitable selectors for the Table of Contents and Threat Details sections
   in the Respec Config (see example). AND add `window.ThreatModel.render` to
   the preprocessing directive. Note that the Table of Contents section
   *MUST* have an id.

   ```JavaScript
      threatModelTocSelector: "#threat-model-toc",
      threatModelDetailsSelector: "#threat-model-details",
      preProcess: [window.ThreatModel.render]
   ```

1. Add a link tag to bring in the threat-model.css, e.g.,

```html
  <link rel="stylesheet" href="threats/threat-model.css" />
```

1. Add script tag for the outline.js file

```javascript
<script src="threats/outline.js"></script> 
```

1. Finally, add script tags for each of the individual threat definition files.
   The file names will vary for your spec, but here's the list in the example spec.

```html
  <script src="threats/t1-imposter-websites.js"></script>
  <script src="threats/t2-network-surveillance.js"></script>
  <script src="threats/t3-network-corruption.js"></script>
  <script src="threats/t4-fraudulent-certificate.js"></script>
  <script src="threats/t5-key-compromise.js"></script>
  <script src="threats/t6-library-compromise.js"></script>
  <script src="threats/t7-quantum-cryptography-attacks.js"></script>
  <script src="threats/t8-harvest-attacks.js"></script>
  <script src="threats/t9-flawed-cryptosuite.js"></script>
  <script src="threats/t10-the-internet-protocol-suite.js"></script>
```

Note: We recommend keeping the contribution directions somewhere in your
repository, as it will help the community contribute threats to your
specification. It need not be in the body of the spec itself, but it should be a
good run down of what contributors need to do to help with threat modeling.
