# 2. Architecture

## The 12-Layer Model

A production coding agent is not a monolith. It is a stack of layers, each responsible for a different concern. Here we examine twelve layers that, together, form the architecture of a system like Claude Code.

The layers, from outermost to innermost:

1. **CLI / Interface** — How the user invokes the agent and receives output
2. **Session Management** — Conversation state, history, and persistence
3. **Permission System** — What the agent is allowed to do
4. **System Prompt Assembly** — Constructing the initial instructions
5. **Context Window Management** — Fitting relevant information into the token budget
6. **Tool Registry** — The set of tools available to the model
7. **Tool Dispatch** — Routing model tool calls to implementations
8. **Tool Execution** — Running the actual operations (file reads, shell commands, etc.)
9. **Result Processing** — Formatting tool results for the model
10. **Error Handling** — Recovering from failures at each layer
11. **Model Interface** — The API call to the language model
12. **Output Rendering** — Presenting the model's response to the user

## Why Layers Matter

Each layer can be designed, tested, and improved independently. A better tool dispatch layer improves every tool. A better context management layer improves every long conversation.

The layers also define the **blast radius** of a change. Modifying the permission system doesn't touch tool execution. Improving output rendering doesn't affect prompt assembly.

## Key Architectural Decisions

*This chapter will be expanded with detailed discussion of each layer, tradeoffs, and design patterns observed in production coding agents.*

---

Previous: [Introduction](./01-introduction) | Next: [The Harness Loop →](./03-harness-loop)
