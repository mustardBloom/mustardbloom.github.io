# 5. Context Management

## The Fundamental Constraint

Every language model has a finite context window. A coding agent must fit its system prompt, conversation history, tool definitions, and tool results into this window — while keeping the most relevant information accessible.

Context management is the art of deciding what the model sees and what it doesn't.

## Prompt Construction

The system prompt is assembled from multiple sources:

- Base instructions (persona, rules, capabilities)
- Environment context (OS, working directory, git state)
- Project-specific instructions (CLAUDE.md, conventions)
- Dynamic context (active tools, permissions)

The order matters. Models attend differently to the beginning, middle, and end of their context.

## Conversation Compaction

Long conversations exceed the context window. The harness must compress older turns while preserving essential information:

- Summarize older tool results
- Drop redundant or superseded information
- Preserve key decisions and findings
- Keep recent context intact

## Cache Optimization

API calls with prompt caching benefit from stable prompt prefixes. Context management strategies should consider cache hit rates:

- Keep the system prompt and tool definitions stable across turns
- Append new content rather than restructuring
- Understand the cache TTL and its implications for conversation pacing

*This section will be expanded with strategies for context budgeting, priority ranking, and the tradeoff between completeness and relevance.*

---

Previous: [Tool System](./04-tool-system) | Next: [Evaluation & Benchmarks →](./06-evaluation)
