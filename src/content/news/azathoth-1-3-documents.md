---
title: "Azathoth 1.3: documents, images, and answers you can trace"
description: "Azathoth 1.3 reads PDFs and images, checks every citation against the source document, and records where each answer came from."
date: 2026-11-07
release: v1.3.0
install: pip install azathoth-ai
---

Azathoth 1.3 reads documents and keeps the evidence of where each answer came from. In plain terms: click an answer, and see where on the page it came from.

## Documents and images in

Workflows accept PDFs and images as inputs, from local files or S3. A step can show a document or image to a model that reads it, on OpenRouter or Amazon Bedrock. Steps declare the kinds of input they need, and model selection respects that.

## Answers you can trace

A step can cite the passages its answer rests on. Each citation is checked against the document's own text, with no model involved, before it's kept, and it's anchored to the exact words, page and position on the page. A citation that doesn't check out can fail the step, or be kept for a later step to judge.

Verified citations are recorded as evidence. Benchmarks and optimization score them beside quality, reliability, latency and cost, so you can see whether a cheaper model still cites its sources. They export as W3C Web Annotations that point back into the source document, including documents in your own storage.

## Contracts and MCP tools

A workflow can declare JSON Schemas for its input and its result, and every production call is held to them. The MCP tools `azathoth-mcp` serves pick those schemas up automatically. And a workflow step can now call a tool that another MCP server serves, pinned to that tool's schemas so a change on the server stops the step instead of sending it bad arguments.

1.3.0 wasn't deployed to an AWS sandbox before release; the changelog says what that leaves unproven.
