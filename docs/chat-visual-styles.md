# Chat visual preferences

The current user requirement is a logo and thinking-indicator preference, selected through a logo list instead of four cards. Palette, typography, welcome text and backgrounds remain unchanged. This is a visual preference inside AetherAI, not a model or service connection. The selected model name remains truthful in the model picker.

## References and scope

Source surfaces: https://claude.ai/, https://chatgpt.com/, https://chat.deepseek.com/. Public application bundles returned HTTP 403 during inspection. Logos are the existing LobeHub SVGs under the MIT license in `resources/model-icons/LICENSE`; see `resources/model-icons/SOURCES.md`. Motion is reconstructed locally. This feature transfers aesthetics; it is not a pixel-identical clone of authenticated, personalized product screens or copied animation code.

## Reusable components and tokens

`chat-style.js` owns validated preset identifiers, localized descriptions, logo sources and thinking markup. It never changes a chat system prompt. `claude-mark.js` stores the existing licensed Claude vector path so its rays can animate independently. The selector uses the existing settings panel, with one trigger and a vertical logo list. Arrow keys, Home/End and Escape work; selection returns focus to the trigger and persists to existing settings storage.

`chat-style.css` styles the logo selector and thinking indicators only. Claude keeps its orange spark and DeepSeek its blue whale; monochrome AetherAI and ChatGPT marks adapt to the light/dark theme. It does not override application surface tokens, text typography or backgrounds. Settings, authentication, model identity and desktop title remain AetherAI.

Indicators: AetherAI's approved fragment cycle; Claude's monochrome radial spark with visibly moving rays; ChatGPT's pulsing dot; DeepSeek's whale with staggered dots. CSS animations pause while the document is hidden and stop for reduced motion. No inference or artificial response delay is introduced. The visual test compares actual rendered indicator pixels, not just computed transforms.

## Verification

Run `npm run check`, `npm test`, `npm run check:security`, plus Electron `tests/chat-preview.cjs` and `tests/style-visual-smoke.cjs`. The latter uses an isolated profile and simulated models; it does not spend API credits or read personal conversations.

Visual capture: 1200 × 850, with responsive checks at 760 and 520 pixels, both light/dark themes and English/Russian. It captures home, logo list, chat with code and math, and seven settings panels. Evidence is written to ignored `artifacts/style-visual/verification.json` and PNGs beside it; in the isolated dependency checkout the directory is `artifacts/security-build/artifacts/style-visual/`. Checks cover actual animation changes, reduced motion, keyboard selection, loaded logos, text/code contrast and composer bounds.

All screenshots and generated visual comparisons remain local. These checks demonstrate the captured states; they do not assert that every remote provider, plugin, or possible response has been exercised.
