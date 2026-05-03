# 4. Tool System

## What Makes a Good Tool?

A coding agent's capabilities are defined by its tools. The model can only act on the world through the tools the harness provides. A well-designed tool system makes the agent more capable; a poorly designed one leads to failures regardless of model quality.

Good tools share these properties:

- **Clear schema** — The model knows exactly what parameters to provide
- **Predictable behavior** — Same inputs produce same outputs
- **Useful error messages** — Failures explain what went wrong and how to fix it
- **Appropriate granularity** — Neither too coarse nor too fine

## Core Tool Categories

Most coding agents provide tools in these categories:

### File Operations
- Read file (with line ranges)
- Write file
- Edit file (search-and-replace)
- List directory

### Shell Execution
- Run bash commands
- Background processes

### Search
- Grep / regex search
- File pattern matching
- Semantic search (optional)

### Specialized
- Git operations
- Web fetching
- Browser automation
- Notebook editing

## Schema Design

*This section will be expanded with concrete examples of tool schemas, common pitfalls, and the relationship between schema quality and agent reliability.*

---

Previous: [The Harness Loop](./03-harness-loop) | Next: [Context Management →](./05-context-management)
