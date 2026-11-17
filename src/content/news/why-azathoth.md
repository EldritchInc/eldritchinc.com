---
title: "Why Azathoth"
description: "AI workflows should be engineered, not guessed at. Why Azathoth keeps the model answering prompts and lets the engine do the rest."
date: 2026-08-01
---

This is where Azathoth began.

## Engineered, not guessed at

Most AI workflows today live inside application code, or inside a model provider's agent loop. Nobody can say which model a step really needs, whether a cheaper one would do, what a run cost, or why last week's output changed. Changing a prompt means a code deploy, and the provider owns the flow.

That's guesswork. AI workflows should be engineered like everything else we run in production: specified, measured, versioned, and changed on purpose.

## The model answers prompts. The engine does the rest.

Azathoth takes the workflow back. The engine holds the full context, runs the tools itself, and hands each model only what its step needs. Models never act as agents and never change the workflow. That makes every step observable, swappable and measurable, and measurement is what makes improvement possible.

## Most of the gain is architectural

A great deal of what AI can do better is available with today's models. It comes from how the work is structured, checked and improved, not from waiting for the next model. That's the bet.

## Open, so anyone can check

Azathoth is open source. If the claim is that evidence should decide, the evidence, and the engine that records it, should be open for anyone to inspect.
