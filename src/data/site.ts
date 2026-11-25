// Single source of truth for facts that change between releases.
// Bump `azathoth.version` (and the container tag) on each release.
// azathoth-ai and azathoth-mcp are released together at the same version.

export const site = {
  name: "Eldritch, Inc.",
  url: "https://eldritchinc.com",
  email: "eris@eldritchinc.com",
  location: "Brooklyn, New York",
  booking: "https://calendly.com/orelm23/30min",
  bookingLabel: "Book a 30-minute workflow review",
  githubOrg: "https://github.com/EldritchInc",
} as const;

const version = "1.6.0";

export const azathoth = {
  version,
  // Optional release nickname shown beside the version ("" for none).
  releaseName: "",
  pypiName: "azathoth-ai",
  pypiUrl: "https://pypi.org/project/azathoth-ai/",
  repo: "https://github.com/EldritchInc/azathoth",
  changelog: "https://github.com/EldritchInc/azathoth/blob/main/CHANGELOG.md",
  documentsGuide: "https://github.com/EldritchInc/azathoth/blob/main/docs/documents.md",
  mcpToolsGuide: "https://github.com/EldritchInc/azathoth/blob/main/docs/mcp-tools.md",
  image: `ghcr.io/eldritchinc/azathoth:${version}`,
  imageNote: "amd64 and arm64, cosign-signed; includes the CLI, queue worker and MCP server",
  extras: ["documents", "mcp", "postgres", "bedrock", "worker", "otel"],
  // Set to a URL once the 60-second MCP demo exists; the page hides it until then.
  demoVideoUrl: null as string | null,
} as const;

// Google Analytics 4. It loads only after a visitor accepts analytics cookies.
export const analytics = {
  measurementId: "G-0GY61YDCZT",
  consentKey: "eldritch-analytics-consent",
} as const;

// Netlify Forms. Names must match the form-name each form submits.
export const forms = {
  releaseNotes: "release-notes",
  earlyAccess: "azathoth-team-early-access",
  teamSizes: ["1–5", "6–20", "21–100", "100+"],
} as const;

export const releaseUrl = (tag: string) =>
  `https://github.com/EldritchInc/azathoth/releases/tag/${tag}`;

export const ui = {
  pypiName: "azathoth-ui",
  pypiUrl: "https://pypi.org/project/azathoth-ui/",
  repo: "https://github.com/EldritchInc/azathoth-ui",
  command: "azathoth-ui",
} as const;

export const mcp = {
  pypiName: "azathoth-mcp",
  pypiUrl: "https://pypi.org/project/azathoth-mcp/",
  command: "azathoth-mcp serve",
  guide: "https://github.com/EldritchInc/azathoth/blob/main/docs/mcp.md",
} as const;

// azathoth-team's plans, shown on /workwithus and in its structured data.
// Prices obey `offers.showPrices` below.
export const team = {
  post: "/news/azathoth-team-founding-teams/",
  version: "0.1.0",
  seatPrice: 49,
  minimumSeats: 5,
  enterpriseFrom: "$2,000/mo",
  foundingDiscount: "30–50% off the first year",
} as const;

// Commercial offers shown on /workwithus.
// Set `showPrices` to false to hide every "starting at" price at once.
export const offers = {
  showPrices: true,
  // A public commitment: only turn on once you've decided to stand behind it.
  showAuditGuarantee: false,
} as const;
