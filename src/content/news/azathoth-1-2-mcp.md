---
title: "Azathoth 1.2.0 and azathoth-mcp: your workflows as agent tools"
description: "azathoth-mcp serves promoted Azathoth workflows as MCP tools to Claude Desktop, IDEs and your own agents, with every call recorded and scoped."
date: 2026-11-05
release: v1.2.0
install: pip install azathoth-mcp
---

Agents get real capability. Humans keep control of exactly what they can touch.

## A new package

`azathoth-mcp` serves your promoted workflows as tools over the Model Context Protocol, to Claude Desktop, your IDE, or your organization's own agents. It's released in lockstep with `azathoth-ai`, always at the same version.

## What an agent can and can't do

Exposure is opt-in. You list the workflows an agent may see, one tool per workflow, with the description the model reads. Only promoted workflows run, and each call runs the version in production. Nothing that changes a workflow is ever exposed: no importing, no optimizing, no promoting.

## Every call on the record

Each call is a recorded invocation with its caller attached. Calls are idempotent, so a retry never runs twice, and an interrupted call resumes where it stopped.

## Two ways to run it

For one person, it runs over stdio for a single local client such as Claude Desktop. For teams, it runs over Streamable HTTP as an OAuth 2.1 resource server behind your own identity provider. Tokens come from your provider, there's one scope per tool, and a caller only sees the tools its token allows. The server issues no tokens of its own.

It's the same rule Azathoth has always followed, extended to agents: nothing runs that wasn't promoted, and nothing is exposed that wasn't listed.
