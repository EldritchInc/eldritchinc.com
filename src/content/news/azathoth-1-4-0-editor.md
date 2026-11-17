---
title: "Azathoth 1.4.0: an editor, remotes, and a stable API"
description: "Azathoth now has a local editor that shows each workflow as a graph, remotes for sharing with full history, and a service API that only grows within 1.x."
date: 2026-11-12
release: v1.4.0
install: pip install azathoth-ui
---

Azathoth 1.4.0 is out. `azathoth-ai`, `azathoth-mcp` and the new `azathoth-ui` are all at 1.4.0.

## An editor on your own machine

Azathoth UI is a local editor that opens in your browser. Your workflow is a graph: click a step and everything that feeds it, and everything it feeds, lights up. Compose on the graph, and the form shows what Azathoth would refuse before you save, and which of your models could run each step. Run a workflow on text, JSON or a file and watch its steps light up on real models. Every run is kept, step by step.

## Your models, and remotes

Choose which models your instance may use, then open any model to see which of your steps it could run.

Name a shared instance and see what's in sync, what's only here and what's only there. Push and pull with full history. If two changes land on one workflow, it forks instead of overwriting, and a person chooses. Before you ship, Azathoth warns about a missing credential, an unapproved model, or a child workflow at a different revision. Tokens are stored only as digests, and the editor never touches them.

## Restricted data, lineage and a stable API

Inputs labelled restricted only reach models declared not to retain or train on what they're sent. When a model doesn't qualify, Azathoth says which one and what to declare. Every revision carries a digest covering it and its history, plus who made it, with the same identity on every instance. And the service API behind the command line, the MCP server and the editor is now covered by the 1.x promise: it only grows.

## The honest limits

A core remote trusts every token-holder as its owner. Sign-in and roles are what [azathoth-team](/news/azathoth-team-early-access/) adds. And 1.4.0 wasn't deployed to an AWS sandbox before release; the changelog says what that leaves unproven.

Upgrading moves the database to a new schema: upgrade, then run `azathoth init`.
