---
title: "The model watch: an agent you control"
description: "AI labs keep shipping models. The model watch, a workflow in Azathoth's examples, tries each new one on your own benchmarks overnight and leaves any that do the same work for less waiting for you. It never promotes anything."
date: 2026-11-25
# Add when the reel is up:
# video: https://...
# videoLabel: Watch the model watch
---

AI labs keep shipping models. Every week there's one that's cheaper, or faster, or says it's better, and keeping up means someone trying each one on the work you actually do. The model watch does that while you sleep.

## Five steps, every night

1. **Discover new models.** It lists the models your providers serve now that it has never considered.
2. **Add to local portfolio.** It approves them on this machine only, for testing. Production stays locked.
3. **Benchmark against new models.** It optimizes each workflow you chose on that workflow's own benchmark: your cases, not a leaderboard.
4. **Compare cost and quality.** It puts each winner beside what you run now. Same accuracy, and how much cheaper.
5. **Propose winner.** It leaves a proposal, with the command to promote it, and waits for a person.

In the morning you look at the comparison and decide. Promote from the command line, or open the workflow in the editor and click Promote. Or don't.

## It remembers

A ledger keeps every model the watch has ever considered, and what became of it. A model rejected last week never comes back; to try one again, delete its line. The first night only records what already exists, so the watch starts from there.

## An agent you control

The model watch wakes on a schedule, looks at the world, acts, and reports back. That's an agent. It isn't a model deciding what to do next, though. It's a workflow:

- It can do only what its five steps name.
- Every step is recorded, with what each model saw and what it cost.
- It never touches a remote or production, and only takes back the models it added and rejected.
- The one decision that matters, promoting, is left to you.

That's how Azathoth does agents. The engine drives, models answer prompts, and anything that would change production waits for a person.

## Try it

The model watch ships in Azathoth 1.6's examples. Its [README](https://github.com/EldritchInc/azathoth/tree/main/examples/model-watch) covers the watch file, the ledger, running it every night from cron, and everything it never does.
