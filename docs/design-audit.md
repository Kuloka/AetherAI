# AetherAI design audit

The existing user references remain the layout contract: icon-only Home, browser-style chat tabs, compact square title-bar controls, borderless buttons, project navigation and settings inside Home, and a model/attachment/send composer. The reference is not replaced with a Claude layout.

## Developer references reviewed

- [OpenCode](https://github.com/anomalyco/opencode): existing desktop reference and component package structure; preserve compact navigation rather than introducing a persistent sidebar.
- [assistant-ui command palette](https://www.assistant-ui.com/elements/command-palette): keyboard-driven grouped actions, filtered results, nearest-row scrolling, and handlers wired to real application actions.
- [assistant-ui thread](https://www.assistant-ui.com/elements/thread): separate initial loading, empty, running and history states to avoid welcome/loading flashes; stable component identity during streaming.
- [Lobe UI ActionIcon](https://ui.lobehub.com/components/action-icon): consistent compact icon size, borderless variant and distinct hover/active states.
- [MDN View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API): transition capabilities reviewed. Existing Web Animations are retained for compatibility with the packaged Electron runtime.

## Current implementation and verification

| Area | Implementation | Evidence |
| --- | --- | --- |
| Home | Two compact columns, project SVGs, real actions, search-specific empty states | design-revision-smoke.cjs, rendered Home captures |
| Navigation | Icon-only Home, return animation, tabs with preserved drafts and attachments | design-revision-smoke.cjs |
| Tab visibility | Active tab is revealed on selection, not on routine updates | native overflow test with 18 tabs at 760px; overflow reveals the selected tab immediately |
| Command palette | Ctrl+K, grouped actions from real menu, arrows/Enter/Escape, modal focus | design-revision-smoke.cjs, command-palette.png and four theme/width captures |
| Motion | Shared timing tokens, Home transitions, static tab opening and closing, reduced-motion handling | native Home/tab tests, reduced-motion Home/palette/model checks in design-surface-audit.cjs |
| Languages | New text in all ten existing locale packs | native palette checks in all ten languages; locale smoke checks |

## Completion audit

| Requirement | Authoritative evidence | Result |
| --- | --- | --- |
| Review similar projects and developer resources | Primary project/component documentation linked above, plus MDN dialog accessibility | Reviewed; selected patterns implemented rather than added as mockups |
| Preserve the agreed minimalist layout | Current index.html, home-navigation.js, chat-tabs.js and native navigation captures | Icon-only Home; no persistent left tab or top brand; compact flat controls |
| Implement useful borrowed ideas | command-palette.js, SVG project actions, grouped navigation and state-specific empty UI | Real actions work through existing application handlers |
| Home and model/composer design in both themes | design-revision-smoke.cjs and composer-picker-smoke.cjs, narrow and wide captures | Passed; composer geometry, arrow states, selected models and glass retained |
| Settings and files | design-surface-audit.cjs; all settings tabs at 760px; 760/1200px theme captures; file browser and visible file-panel captures | Passed; compact controls, no horizontal overflow, SVG buttons, translated labels and correct file content |
| Code and long answers | Exact syntax/copy assertions; real streamed long-answer fixture; dark/light captures | Passed; code preserved and the reading position remains stable |
| Keyboard focus and motion | Modal focus/return checks, palette keyboard tests, 18-tab overflow test, reduced-motion emulation | Passed; focus stays in dialogs and active tabs become visible |
| Locales and content protection | interface-locales-smoke.cjs, complete ten-language dictionaries, protected filenames/paths and replies | Passed |
| Runtime regression checks | npm run check; 139 unit tests; native navigation/model/surface/locale checks | Passed; one transient account test failure passed in isolation and in the subsequent full run |
| Deliverable | dist/AetherAI-design-final-preview.exe (78,296,266 bytes); app.asar equality against all changed runtime files; package-security.cjs | Built and verified |

The first preview passed the listed checks, but the user subsequently found navigation and settings regressions. The original checks did not cover a physical plus click or an initial active blank tab; the correction audit below covers those cases. The deliverable is a local Windows preview; it is not a newly published release. Chat switching still waits for the active response to finish, as disclosed in the previous preview; concurrent generation is outside this design task. Drafts and attachments remain with their chat during the current session.


## User-reported regression correction (2026-10-12)

- Fixed initialization ordering: navigation announces readiness and receives the current chat state even when data loading finishes before navigation scripts. Startup creates or reuses a blank New chat tab.
- Removed the active tab underline and inner hover patch. A native mouseDown/mouseUp test in a frameless Electron window now checks the plus hit target and creation.
- Plus stays available during generation and adds a background chat without moving the current response. Selecting another chat still waits for the response to finish.
- Language uses an SVG arrow with open-state rotation; color fields use clipped 32 by 28 pixel swatches.
- MCP presets are compact rows with translated explanations and Connect actions. The existing custom server form is collapsed initially. Connection and enablement remain explicit user actions. Discord no longer repeats its heading.
- Verification: npm run check (68 runtime files), 139 unit tests, native design-revision, design-surface and ten-language smoke checks passed. Screenshots were inspected for color controls, language, MCP and Discord.
- Corrected local preview: dist/AetherAI-tabs-fix-preview.exe. This is not a public release.


## Static tabs for release 1.24.12

User requested fixed blocks with a close button. Removed tab entrance transforms, animated closing clones, and smooth selection scrolling. Tabs retain fixed width, selection and close actions. Native checks assert no entrance animation, no animated close clone, a working plus and the selected tab being visible when the strip overflows.


## Repeated selected-tab click correction for 1.24.13

Selecting the current chat no longer rebuilds its messages or transfers focus to the composer. Closing a tab and reopening that same chat from Home still restores the tab. Native checks repeat physical clicks on the only startup tab, compare its rectangle and verify no message mutations; a populated answer retains its DOM on reselection. Publication of 1.24.12 was cancelled to include this correction in 1.24.13.


## Full-width tab row for 1.24.14

Following user clarification, tabs use intrinsic width with a 145 pixel minimum. Long titles remain on one line without truncation or flex shrink. Wheel scrolling accesses overflow, and oversized selected tabs reveal their beginning. The native navigation fixture checks a long title and its rendered width. Publication of 1.24.13 was cancelled before this final layout correction.
