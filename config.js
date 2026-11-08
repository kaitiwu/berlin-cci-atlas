// Berlin CCI Atlas: settings you can edit without touching index.html.
// To credit a contributor: add a line to `contributors` (and to CONTRIBUTORS.md), save, done.
// roles: tester | feedback | place | data | translation | design | code
window.ATLAS_CONFIG = Object.assign(window.ATLAS_CONFIG || {}, {
  projectOwner: "Kai-Ti Wu Consulting",   // controller named in the privacy notice
  contactEmail: "hello@kaitiwu.de",       // contact for data protection requests and removal from the contributors list
  imprintUrl: "https://www.kaitiwu.de/impressum",  // Impressum and general privacy information (linked, not repeated)
  host: "GitHub Pages (GitHub, Inc., USA)",         // who serves the Atlas, named in the privacy notice
  feedbackUrl: "https://www.kaitiwu.de/berlin-cci-map#feedback",

  contributors: [
    // { name: "A. K.", roles: ["feedback"], since: "2026-11" },
  ],

  // Newest first is not required; the Atlas sorts by date. `thanks` lists contributor names.
  changelog: [
    { date: "2026-11", text: "Your Kiez lights up on the map while you choose it, and you can save it straight from search or by tapping the map", thanks: [] },
    { date: "2026-11", text: "Contributors list and changelog: everyone who tests the Atlas and sends feedback gets credit", thanks: [] },
    { date: "2026-10", text: "Visits only count when you're at the place (your phone checks once; the position isn't saved)", thanks: [] },
    { date: "2026-10", text: "“What's around” replaces the Kiez profile: places near you, sorted by what you can do there", thanks: [] }
  ]
});
