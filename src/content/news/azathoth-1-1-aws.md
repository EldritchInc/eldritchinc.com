---
title: "Azathoth 1.1: Azathoth on AWS"
description: "Azathoth 1.1 adds PostgreSQL, Amazon Bedrock, a container image, a queue worker, resumable runs, a standard tool library and OpenTelemetry tracing."
date: 2026-11-03
release: v1.1.0
install: pip install azathoth-ai
---

Azathoth 1.0 ran on a laptop. 1.1 is about running it where companies run things.

## Built for production

PostgreSQL now sits alongside SQLite, and Amazon Bedrock alongside OpenRouter. There's a container image, and a queue worker for long jobs. Interrupted runs resume where they stopped, from a journal, and only one process runs a run at a time.

A standard library of tools covers the common work: running child workflows, looping and mapping over them, reshaping JSON, splitting text, and reading files of any size from S3 in parallel pieces.

## Seeing what happened

OpenTelemetry tracing covers jobs, invocations, runs and steps, and it never carries content. Each step can report its confidence, so escalating to a stronger model when a cheap one is unsure is built from ordinary steps.

## On AWS

A CloudFormation template for AWS Fargate is included, with job queues, an encrypted evidence bucket, least-privilege access and autoscaling workers. End-to-end AWS validation is in progress, and we'll say so plainly until it's done.

## Built in the open

The roadmap for 1.1 was announced publicly on October 30 and built in the open, commit by commit, on GitHub.
