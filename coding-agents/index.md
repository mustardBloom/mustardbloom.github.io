# Harness Engineering of Coding Agents

**Behind Claude Code**

*By Beibei Wang*

---

This book explores the architecture, design, and engineering of coding agents — AI systems that can write, debug, and reason about code. It uses Claude Code as a case study to examine the layers of a modern coding agent, from the outer harness loop to the inner model calls.

## Who this is for

- Engineers building or evaluating coding agents
- Researchers studying LLM-based tool use and agentic systems
- Anyone curious about what happens behind the scenes when an AI writes code

## Chapters

1. **[Introduction](./01-introduction)** — What are coding agents, and why does the harness matter more than the model?
2. **[Architecture](./02-architecture)** — The 12-layer architecture of a production coding agent.
3. **[The Harness Loop](./03-harness-loop)** — How the outer loop orchestrates model calls, tool execution, and error recovery.
4. **[Tool System](./04-tool-system)** — Designing tools that an LLM can reliably use: file I/O, shell, search, and more.
5. **[Context Management](./05-context-management)** — Prompt construction, conversation compaction, and staying within the context window.
6. **[Evaluation & Benchmarks](./06-evaluation)** — Measuring coding agent capabilities: benchmarks, metrics, and what they miss.

## Status

This book is a work in progress. Chapters will be published as they are completed.

---

*Have feedback or suggestions? Reach out via [GitHub](https://github.com/mustardbloom) or [email](mailto:beibeiwang045@gmail.com).*
