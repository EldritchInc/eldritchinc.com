---
title: "Azathoth 1.5: know which model each step should use"
description: "Azathoth 1.5 tries candidate models on your own test cases, puts the winner and its savings beside what you run now, and brings everything the command line does into the editor."
date: 2026-11-20
release: v1.5.0
install: pip install azathoth-ui
# Add when the 60–90 second optimization-run capture exists:
# video: https://...
# videoLabel: Watch an optimization run
---

Do you know which model each step of your pipeline should be using? Not the popular one, or the one picked six months ago. The one that passes your own test cases at the lowest cost and latency, today.

## How Azathoth answers it

Write a workflow and give it a benchmark: real inputs, and what a good answer looks like. Azathoth tries candidate models step by step, scores every one, and puts the winner next to what you run now. It shows the savings per run and projects them over the last 30 days of real traffic, labelled as a projection. Nothing is promoted until a person says yes.

## The editor now does everything the command line does

- **Production.** Promote, roll back and invoke. A Production tab lists every invocation with its outcome and caller, and each invocation has a page with its input, result, any failure reason, and resume.
- **Sensitivity and model policy.** Label inputs public, internal or restricted, and see the label on every run, invocation, benchmark and case. Declare a model's no-retention and no-training policy, with who declared it and when. Restricted data only goes to models declared that way.
- **Judges, feedback and benchmarks.** Mark runs good or bad, with a reason and a corrected output. Build benchmarks, and turn real runs, production runs included, into cases. A case is never added without a person choosing its expected output, and it's never less sensitive than the run it came from.
- **Optimize.** Run optimization, inspect experiments, compare, promote the winner, and see what it saved.
- **Spend.** Reports per workflow and model, by day, week and month. Billed and estimated dollars are never mixed, and a call with no known price is never treated as free.
- **Diffs.** Compare any two revisions of a workflow, tool or benchmark, value by value.
- **Tools from any MCP server,** shown for review before they're imported.

All of it runs on one public API, so the command line and the editor behave exactly the same.

## Upgrading

The database doesn't change from 1.4: `pip install --upgrade azathoth-ui azathoth-ai`. 1.5.0 wasn't deployed to an AWS sandbox before release; the changelog says what that leaves unproven.

## Next

1.6 turns a shared Azathoth into something you work on, the foundation for [azathoth-team](/news/azathoth-team-early-access/). The [early access list](/news/azathoth-team-early-access/#early-access) is open.
