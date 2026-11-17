---
title: "Azathoth 1.0: an engine for AI workflows that improve from evidence"
description: "The first release of Azathoth on PyPI: AI workflows as versioned documents, every step recorded as evidence, and optimization that never reaches production on its own."
date: 2026-10-27
release: v1.0.0
install: pip install azathoth-ai
---

Azathoth 1.0 is on PyPI as `azathoth-ai`. It's MIT licensed.

## The loop

Define a workflow. Run it. Evaluate the results. Benchmark it against real cases. Optimize it. Promote the winner. Invoke what's in production. Every stage writes to the same record of evidence.

## What that means in practice

Workflows are versioned documents, composed from prompt, tool and child-workflow steps. They're never edited in place: a change is a new revision, and the old one stays.

Every step is recorded as evidence: which model ran, what it was given, what it cost and how long it took.

Benchmarks score results by exact match, normalized match, JSON schema, or a model acting as judge. The optimizer searches for cheaper models that hold quality on the same benchmark, step by step.

And nothing reaches production without someone deliberately promoting it.

In 1.0, models ran on OpenRouter and state lived in SQLite. Its design decisions are recorded in 90 architecture decision records.

## Built in public

Azathoth was built solo, in public, starting August 1, 2026.
