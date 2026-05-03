# 6. Evaluation & Benchmarks

## Why Evaluation is Hard

Coding agents operate in open-ended environments. Unlike classification tasks with clear accuracy metrics, evaluating an agent requires judging whether it *accomplished a goal* — and goals vary in complexity, ambiguity, and scope.

A benchmark that measures function-level code generation tells you little about whether an agent can debug a failing CI pipeline across multiple files.

## Benchmark Categories

### Function-Level
- HumanEval, MBPP — isolated function generation
- Strength: reproducible, fast
- Weakness: doesn't test tool use, multi-file reasoning, or real-world complexity

### Repository-Level
- SWE-bench — real GitHub issues, real codebases
- Strength: tests end-to-end agent capability
- Weakness: expensive, noisy, hard to control for difficulty

### Tool Use
- BFCL (Berkeley Function Calling Leaderboard) — function calling accuracy
- Strength: isolates tool use from other capabilities
- Weakness: synthetic scenarios may not reflect real tool use patterns

### Custom / Internal
- Project-specific benchmarks tailored to your agent's domain
- Strength: measures what matters for your use case
- Weakness: not comparable across systems

## What Benchmarks Miss

- **Iteration quality** — How well does the agent recover from mistakes?
- **Context efficiency** — How much of the context window does the agent waste?
- **User interaction** — How well does the agent communicate and collaborate?
- **Safety** — Does the agent avoid destructive actions?

## Designing Better Benchmarks

*This section will be expanded with principles for benchmark design, metric selection, and avoiding Goodhart's law in agent evaluation.*

---

Previous: [Context Management](./05-context-management) | [Back to Overview →](./)
