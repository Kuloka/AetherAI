AetherAI 1.24.10

- Add a full-width animated command menu above the composer: /browse, /run, /think and /goal, each with its own vector icon. A space converts the command into a removable icon. The placeholder is now "Type / for commands"; the @ Context menu and rotating examples are removed.
- Keep a goal in the current conversation; /goal clear removes it. Goals guide later answers without authorizing tools or starting background execution.
- Execute requested project commands with native confirmation, actual output, exit status, cancellation and a timeout. /run uses the exact command; every process still requires confirmation.
- Improve generated project files with validated structured output when supported, broader Markdown file parsing and launcher support. Fix lost file attachments and misleading saved-file messages after folder errors.
- Shorten model labels, group other model families under one preference, open Thinking to the side and correct model arrow directions for centered and bottom composers. Animate the Thinking arrow disappearing forward and fading back in place facing right.
- Show Exploring with a globe during web search and tighten spacing between response status, tokens and answer text.

Windows installer upgrades preserve existing user data. Update downloads and installation require user actions. Commands use your ordinary OS permissions; the project folder is a working directory, not an OS sandbox. macOS builds remain unsigned and unnotarized.
