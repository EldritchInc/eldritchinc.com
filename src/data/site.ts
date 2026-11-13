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

const version = "1.4.0";

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

// Commercial offers shown on /workwithus.
// Set `showPrices` to false to hide every "starting at" price at once.
export const offers = {
  showPrices: true,
  // A public commitment: only turn on once you've decided to stand behind it.
  showAuditGuarantee: false,
} as const;
