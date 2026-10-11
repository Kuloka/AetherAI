AetherAI 1.24.8

- Integrate the supplied React Streaming Text design into real chat replies: words fade out of blur, inline source links become compact chips, and sources expand with an animated panel and an accurate count.
- Add compact answer actions for copying, repeating a request and marking an answer helpful or unhelpful. Feedback stays in local chat history. Keep the conditional Explain in more detail follow-up and all ten interface languages.
- Fix code copying through the trusted Electron clipboard API, retaining browser fallbacks and exact indentation/newlines.
- Add Explain / Check / Rewrite actions for selected answer passages. The passage and question are prepared in the composer and sent only when the user chooses Send.
- Add per-chat learning mode in the reasoning menu, with Hint, Next step and Full solution prompts. This changes the model's instructions rather than guaranteeing its behavior.
- Remove the command palette and its sidebar button. Keep the send button neutral white/gray independently of the saved accent color.
- Fix the Groq quota ring to show daily request headers only, rather than mixing them with replenishing minute-token limits. Display tenths of a percent and preserve known daily limits if a response omits their headers.

Windows installer upgrades preserve existing user data. Update download and installation require user actions. macOS builds remain unsigned and unnotarized.
