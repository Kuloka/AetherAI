# Streaming Text integration

`components/ui/streaming-text.tsx` adapts the supplied 21st.dev Streaming Text component to actual AetherAI replies. The existing shadcn structure, TypeScript alias and Tailwind 4 build are reused. Styles live in `ui/styles.css`, scoped to the component with `n:` utilities; they do not replace the application's colors or reset its CSS. No additional dependencies are required.

`ui/streaming.tsx` mounts and cleans up React roots inside the existing Electron renderer, updates translations and busy state, and builds with the existing `build:ui` pipeline. `streaming-text.js` reveals received words at an 80 ms cadence, catches up on large bursts, supports reduced motion and immediately flushes the full answer on completion. New words fade from blur; code and formulas retain their existing renderer and copy actions.

Sources and inline citation chips come only from actual message URLs. The source count is the number of valid, unique links, rather than the demo's hardcoded count. Sources expand with the supplied grid/opacity transition. Copy writes the real answer to the clipboard. Repeat sends the original question again as a new turn without deleting previous replies. Helpful/not-helpful votes are stored locally on the message and are not sent to providers. Follow-ups retain the existing conditional **Explain in more detail** action and prepare the composer without sending automatically.

The demo's pistachio answer, stock icons, fake sources and repeating animation are not included in chat history. All ten application languages and keyboard access are supported. Run `npm run check`, `npm test`, and the native Electron tests `tests/visual-polish-smoke.cjs`, `tests/answer-visual-smoke.cjs` and `tests/chat-interactions-smoke.cjs`.
