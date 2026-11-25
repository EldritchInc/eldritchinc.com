---
title: "azathoth-team 0.1.0: open to founding teams"
description: "azathoth-team, the team tier of Azathoth, is out for founding teams: each person signs in as themselves, holds roles on each remote, and leaves a tamper-evident record of what they did. Team is $49 per seat per month, from 5 seats."
date: 2026-11-25
earlyAccess: true
---

azathoth-team is the team tier of Azathoth. It's a plugin installed beside Azathoth on your remote's host, and it fills the three seams Azathoth 1.6 gives a remote: who a caller is, what they may do, and the record of what they did. Version 0.1.0 is out, for founding teams.

## What's in 0.1.0

- **Each person is themselves.** People and service accounts each hold their own tokens, one per device. A service account is sponsored by a person, and stops working when that person is disabled.
- **Sign-in through your identity provider,** with OpenID Connect. Setup is written up for Google Workspace, Microsoft Entra ID and Okta. A first sign-in links by verified email and, with Google, only from your company's domain.
- **Roles on each remote.** Six are built in: viewer, author, runner, approver, promoter and spend reader. The five high-privilege actions, such as reading restricted data, are never part of a role; each is given to a person by name. A refusal says which role would have allowed it.
- **A tamper-evident audit.** Every change and every restricted read is recorded in a chain, so an edit or a deletion shows. Take an anchor now and then, keep it somewhere else, and check the chain against it. Export the audit whenever you like.
- **Seats.** A remote runs under a signed licence from Eldritch, checked on the remote itself, with no call home. People take seats; service accounts don't.
- **An admin console.** `azathoth-team admin serve` opens a console for your team on the remote's host, for that machine's browser only: people, access, tokens, identities, the licence and the audit. Each change it makes is made exactly as its command makes it.

## Not in 0.1.0 yet

The [early access post](/news/azathoth-team-early-access/) listed more than this release has. Still to come:

- SAML sign-in and SCIM provisioning.
- Rules for restricted data beyond who may read it, and an assurance report.
- Reporting across remotes: rollups, cost centres, budgets and forecasts.

## Pricing

- **Team:** $49 per seat per month, from 5 seats ($245 a month). No usage fees.
- **Enterprise:** from $2,000 a month, with SAML and SCIM when they ship, an SLA on audit export, support SLAs, and help with a private deployment.
- **Founding teams:** 30–50% off the first year, in exchange for a case study and a reference call.

The engine, the MCP server and the single-user editor stay MIT licensed and free. A remote without a licence works as it always has: one owner who can do everything.

## How to get it

azathoth-team isn't on any public package index. Apply below. We'll talk through what your team needs, and once you have a licence we'll give you the two packages, or install them on your remote with you.
