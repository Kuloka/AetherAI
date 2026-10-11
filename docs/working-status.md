# Working status

The live response status reads **Working…** while waiting, receiving reasoning and streaming the answer. Image generation and web search retain their meaningful stage labels. The reasoning panel is labeled **Reasoning**; model reasoning settings remain separate from the work status.

All four visual presets use stationary original marks. AetherAI is a two-path mark, and Claude, ChatGPT and DeepSeek use existing local brand SVGs in their native colors. The fragmented-logo animation loop and the other presets' moving rays/dots are removed. Existing home/sidebar logo effects are separate and are retained.

Only the work label has a neutral, narrow text highlight moving on a 3.2-second cycle. Light and dark themes use separate gray highlight palettes with at least 4.5:1 contrast against their surfaces. The effect does not move the text or logo, change the application's accent, or add a glowing outline. The token counter stays on the same baseline, close to the work label, with its previously selected rolling-digit behavior.

The CSS uses a normal readable color as fallback, and enables clipped gradients only where supported. Reduced motion, increased contrast and forced colors disable the moving gradient and restore solid text. Background visibility pauses it. Live announcements include only the status, not every token-counter update. Search labels restore Working correctly when answer generation resumes. Completing, stopping or failing a request removes the active effect.

Developer references: [MDN background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-clip), [MDN accessibility media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility). This is an independent implementation of the requested visual treatment, not copied Claude interface code.

Validation: `tests/working-status-smoke.cjs` exercises actual Electron generation across four logos and two themes, static geometry, moving and visibly rendered highlights, contrast, token spacing, reduced motion, background pausing, 360/520/1200-pixel windows, live-answer transition and complete/stop/error cleanup. `tests/style-visual-smoke.cjs` checks 16 style/theme/language combinations, keyboard selection, body/code contrast, responsive composer, persistence and 28 settings states. Captures and reports are under `artifacts/working-status` and `artifacts/style-visual`.
