---
title: "Azathoth 1.6: a shared Azathoth your team works on"
description: "In Azathoth 1.6 a remote serves everything the command line and the editor do. Every call is a named action a policy can allow or refuse, long work runs as jobs on the remote, and a remote's token can come from your identity provider."
date: 2026-11-25
release: v1.6.0
install: pip install --upgrade azathoth-ui azathoth-ai
---

Until 1.6, a remote was where you pushed workflows and pulled them from. The work itself, running, benchmarking, optimizing and promoting, happened on your own machine. In 1.6, a remote is an Azathoth your team works on.

## Everything runs on the remote

- **Every command takes `--remote`.** A command run with `--remote prod` runs on that remote and prints exactly what it prints locally: the same lines, the same records, the same exit status.
- **The editor works on any remote** as it does on your own instance. Every page opens on a remote, and a remote's overview shows what it runs, its edition and its jobs.
- **Long work runs as jobs.** Runs, invocations, benchmarks and optimizations run on the remote's own workers, are kept in its database, and are shown as they go. If a server stops partway, a run picks up from its journal.
- **A client for your own code.** `api.connect(url)` gives your Python an instance whose every call goes to the remote, with the same types and the same errors as a local one.

## Every call is a named action

A remote names, in code, the action each call asks its policy about and what each call tells its audit. There are 27 actions. Five are marked high privilege, because they let a caller run code on the remote, read restricted data, or let other people in. When a policy refuses a call, the caller gets the policy's reason, in its words.

The open core still lets every token do everything, as before. The catalog is what a team's policy builds on: [azathoth-team](/news/azathoth-team-founding-teams/) gives each person their own roles, on each remote.

## Tokens from your identity provider

A remote can take its token from a command instead of a variable:

```bash
azathoth remote add prod https://azathoth.example.com --token-command "gcloud auth print-identity-token"
```

The command runs without a shell. Its token stays in memory, never on disk, and is asked for again before it expires.

## Also in 1.6

- **A remote answers requests together,** not one at a time, so a long push holds up nobody else. Two pushes that race on one workflow are told it diverged; neither is saved as a fork.
- **[The model watch](/news/model-watch/),** a new example: a workflow to run every night that tries the models released since its last run on your own benchmarks, and leaves any that do the same work for less waiting for you to promote. It never promotes anything itself.
- **Windows.** Serving a remote and the queue worker are tested on Linux and macOS. On Windows they still run, at your own risk, and say so.

## Upgrading

The database moves from schema version 7 to version 9. Upgrade, then run `azathoth init`, as after every upgrade:

```bash
pip install --upgrade azathoth-ui azathoth-ai
azathoth init
```

If you serve workflows with `azathoth-mcp`, upgrade it in the same command. 1.6.0 wasn't deployed to an AWS sandbox before release; the changelog says what that leaves unproven.

## Next

[azathoth-team](/news/azathoth-team-founding-teams/), the team tier built on 1.6, is out for founding teams.
