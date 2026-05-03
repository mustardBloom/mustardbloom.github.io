# 1. Introduction

## What Are Coding Agents?

A coding agent is an AI system that can write, modify, debug, and reason about code. Unlike a simple code-completion model, a coding agent operates in a loop: it reads context, decides on an action, executes it (editing a file, running a command, searching code), observes the result, and repeats.

The distinction matters. A language model generates text. A coding agent *acts* on a codebase.

## Why the Harness Matters

The model is only one component. The **harness** — the software that wraps the model, manages tools, constructs prompts, handles errors, and orchestrates the loop — determines whether the agent is useful in practice.

Two agents using the same underlying model can differ dramatically in capability, depending on:

- How tools are defined and exposed to the model
- How context is assembled and managed within the token window
- How errors and ambiguity are handled
- How the agent decides when to stop

This book is about that harness layer.

## What This Book Covers

We use Claude Code as a concrete case study, but the principles apply broadly to any coding agent or LLM-based agentic system.

Each chapter examines one layer of the system, from architecture down to evaluation:

- How the pieces fit together (architecture)
- How the loop runs (harness loop)
- How tools are designed (tool system)
- How context is managed (context management)
- How we know if it works (evaluation)

## Prerequisites

Familiarity with large language models and basic software engineering. No specific framework knowledge is required.

---

Next: [Architecture →](./02-architecture)
