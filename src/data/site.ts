// Single source of truth for facts that change between releases.
// Bump `azathoth.version` (and the container tag) on each release.

export const site = {
  name: "Eldritch, Inc.",
  url: "https://eldritchinc.com",
  email: "eris@eldritchinc.com",
  location: "Brooklyn, New York",
  booking: "https://calendly.com/orelm23/30min",
  bookingLabel: "Book a 30-minute workflow review",
  githubOrg: "https://github.com/EldritchInc",
} as const;

export const azathoth = {
  version: "1.1.0",
  releaseName: "Azathoth on AWS",
  pypiName: "azathoth-ai",
  pypiUrl: "https://pypi.org/project/azathoth-ai/",
  repo: "https://github.com/EldritchInc/azathoth",
  image: "ghcr.io/eldritchinc/azathoth:1.1.0",
  extras: ["postgres", "bedrock", "worker", "otel"],
} as const;

// Commercial offers shown on /workwithus.
// Set `showPrices` to false to hide every "starting at" price at once.
export const offers = {
  showPrices: true,
  // A public commitment: only turn on once you've decided to stand behind it.
  showAuditGuarantee: false,
} as const;
