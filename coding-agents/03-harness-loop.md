# 3. The Harness Loop

## The Core Loop

At the center of every coding agent is a loop:

```
while not done:
    prompt = assemble_context(conversation, tools, system_prompt)
    response = call_model(prompt)
    for tool_call in response.tool_calls:
        result = execute_tool(tool_call)
        conversation.append(result)
    if response.is_final:
        done = True
```

This loop is deceptively simple. The complexity lives in each step.

## Prompt Assembly

Before each model call, the harness must decide what goes into the prompt. This includes:

- The system prompt (instructions, persona, rules)
- Conversation history (possibly compacted)
- Tool definitions (schemas the model can call)
- Recent tool results
- Any injected context (file contents, search results)

The challenge: all of this must fit within the context window.

## Tool Execution

When the model returns a tool call, the harness must:

1. Validate the call (correct tool name, valid parameters)
2. Check permissions (is this tool allowed in this context?)
3. Execute the operation (read a file, run a command, etc.)
4. Capture the result (stdout, stderr, file contents, errors)
5. Format the result for the next model call

## Stopping Conditions

The agent must know when to stop. Common conditions:

- The model produces a final text response with no tool calls
- A maximum number of iterations is reached
- The user interrupts
- A critical error occurs

## Error Recovery

*This section will be expanded with patterns for retry, fallback, and graceful degradation in production harness loops.*

---

Previous: [Architecture](./02-architecture) | Next: [Tool System →](./04-tool-system)
