# Design

## Source of truth
Active, 2026-10-10. This contract covers the AetherAI `/showcase/` recording playground. Evidence: existing desktop logo in `resources/aetherai-logo.svg`, website source in `docs/source`, user-supplied Clop Code video, and the user's preference for screen recording, zooms and cursor interaction instead of image-and-caption slides. The existing download website and desktop UI have their own established layout.

## Brand
Monochrome, confident, curious. Use the actual AetherAI mark. Show the provider honestly. Avoid third-party impersonation, invented performance claims, promises of free Claude, cartoon mascots and generic marketing card grids.

## Product goals
A striking, functioning page the user can record themselves. Interactive particle sculpture, smooth transformations, an executable visual example, and working download navigation. This is a presentation playground, not a live cloud chat service.

## Personas and jobs
Creator recording a product teaser on a desktop; visitors exploring on a phone. The primary job is to move the cursor, change the sculpture and run a visual example without setup or paid API calls.

## Information architecture
`/showcase/`: cinematic hero, interactive demo, download footer. Primary action opens the demo. Secondary action leads to the current GitHub release. Recording mode removes navigation and lets the sculpture fill the viewport.

## Design principles
Motion is the subject, not decoration around static screenshots. Each control changes a visible state. Keep short text on the same surface as the interaction. Preserve truthfulness about the demonstration.

## Visual language
Near-black background, warm-white text and particles; muted neutral text. Large tightly spaced Segoe UI typography, generous open space, thin rules, minimal outlines and rounded controls. Smooth particle morphs, restrained hover feedback, no strobing. Adapt Kokonut UI's Background Paths from the 21st.dev catalogue, with attribution and its MIT license.

## Components
React hero and scene selector; canvas particle sculpture; adapted Background Paths; demonstration composer; preview/code tabs; fullscreen and recording controls. Tokens owned by `docs/source/showcase/showcase.css`.

## Accessibility
Semantic headings, labelled inputs and buttons, visible keyboard focus, native links, status announcements for generation. Honour reduced motion, provide pause and keyboard escape, keep readable contrast. Do not trap focus in recording mode.

## Responsive behavior
Desktop: text to the left of the sculpture, demo split between conversation and result. Below 760px: stacked hero and demo, compact navigation, touch controls replace hover hints. No horizontal document overflow at 390px.

## Interaction states
Idle, generating, completed, cancelled and empty input. Demo generation uses local presets and says so. Disable resubmission while generating; clean up timers and animation frames. Downloads are actual links. Fullscreen failures surface a usable message.

## Content voice
Russian by default, brief and direct. Use AetherAI consistently. Explain that demo results are prepared examples; don't imply arbitrary prompts call an AI provider.

## Implementation constraints
Use the existing React 19.2 and esbuild dependencies in `docs/source`. Bundle locally without a runtime CDN. Keep the current public homepage and Search Console file. Canvas caps device pixel ratio and particle count, pauses when hidden and honours reduced motion. Validate desktop/mobile screenshots and demo interactions before handing over.

## Open questions
No blocking questions. Publication on the existing Cloudflare website is authorized by the user's follow-up request.

## Homepage integration

Settings now group navigation under Application, AI & models, and Tools. Appearance collects chat visuals and thin (1px) key phrase underlining, colors/theme, then backgrounds. Local mode, compute and specialist models share their own section; image generation has a separate section. Each page has a short title and explanation; switching sections resets its scroll position. Existing controls, connections and persistence are retained.

Desktop provider resources use compact cards for local models, five supported API providers and the separate Ollama Cloud connection. Provider names have no logos or icons. Square green switches enable/disable saved API connections; each API provider has one pencil opening a compact dialog, without expanding or highlighting the card. Enter saves and closes after validation; outside click and Escape dismiss the dialog without closing Settings. Disabled providers retain encrypted keys, disappear from available models and stop their active requests. Connection state and model counts come from the existing APIs; no new providers or invented counts. The default accent is white; #B5F36D is reserved for enabled switches and answer underlines and is not offered in the palette. Previously saved lime accents return to white while other appearance choices remain. Optional answer emphasis underlines model-authored bold spans, excluding code, with a persistent Customization switch. Accents belong to switches and text emphasis, not borders around full cards or responses.

Product clarity pass: preserve the scroll sculpture and four chapters, explain the unified workspace, selected cloud provider, MCP permissions and visible agent progress. Published downloads remain v1.24.6, verified against the six GitHub release assets. Keep navigation and its download link visible through scrolling and on mobile. Link to the actual README; do not add fabricated screenshots, capabilities or performance promises.

Each scroll chapter now spans 1.8 viewport heights. Copy stays fully sharp and stationary through the central 55% of each chapter; smooth fade/blur is confined to the boundaries, giving time to read before the next block replaces it.
The latest correction requires a narrow helix filling the viewport vertically, not horizontally. The opening has no marketing headline, description or download actions. Feature information emerges only in clouds during the scroll story. Text and downloads appear at the ending; further app details are collapsed there. The grayscale palette remains neutral, clouds stay within the viewport, and rotation is restrained.
The user requested publication on the existing Cloudflare website, then clarified that the helix must stay centered and information must emerge as clouds from its turns. Four scroll chapters activate glass speech bubbles anchored to actual projected particle coordinates. The helix remains visible and rotates with scroll progress; it fades only after the story. Original HTML copy stays accessible and works without JavaScript. All ten languages, feature tabs, native downloads, canonical metadata, CSP and the Google verification file are preserved. The homepage helix moves only with scroll progress, freezes immediately when scrolling stops, and ignores pointer movement. The pause/resume button is removed; the decorative paths are static. Publishing is authorized by the request to put this on the existing site.

The desktop composer places the quota circle last in the model/action row. Long model names truncate, the circle shrinks at narrow widths, and extra chevrons hide only at the smallest breakpoint. The percentage and accessible quota description remain available.

The new scroll layout shifts the helix right on desktop and places localized feature copy in the free space on the left. Scroll directly controls text opacity, vertical displacement and subtle blur; each chapter fades away before the next appears. Mobile copy sits above the sculpture. This supersedes the speech-cloud layout. No idle animation or pause button.


## Desktop activity contract ? 2026-10-13

This section is Active for the Electron desktop workspace and supersedes older desktop activity notes above; the showcase and homepage contracts remain separate. Evidence: user request for compact rounded editing clouds, actual renderer/team/browsing code, glass tokens, and native activity and file captures.

- Brand and hierarchy: retain neutral AetherAI typography, compact Home/tabs and existing theme choices. New activity pills are rounded exceptions to square top navigation. No generic colored borders or oversized buttons.
- Product job: a person building/editing a project can see what file is being written, line/change counts, actual code, and whether real specialists or web exploration are involved.
- File component: collapsed 32px glass capsule; filename, line/change counts and SVG arrow. Expanding reveals numbered code. Green/red changes derive from the real prior file; unknown baselines stay neutral. Partial existing-file output does not invent removed tail lines. New-file additions may show as they arrive. Completed, unsaved and stopped previews have honest labels.
- Agent component: collapsed pill with the number of actual worker rows, active/total while workers are running, and expandable task/model/status/output. Do not label completed workers as still running during synthesis. Preserve the trace after Stop and finalization.
- Browsing: actual globe icon, no decorative three-dot search marker. Use restrained opacity/rotation and disable it under reduced motion.
- Accessibility/responsiveness: native details/summary keyboard behavior, labelled code region, visible focus, text signs as well as color for diff, no page overflow at narrow widths, both themes.
- Constraints and evidence: existing Electron/React/CSS tokens, no new packages, bounded diff computation, read-only baseline fetch, existing confirmation and file-save validation. Native tests cover open-state/scroll preservation, real project changes, agent lifecycle and browsing. EXE builds happen only when requested.

Possible next refinements (proposals, not implemented): one compact activity row under the answer metadata; quieter separators for nested actions; optional file open/copy actions inside disclosure rather than extra controls on the collapsed capsule. No blocking design question remains for the implemented activity changes.

Selected activity refinements (2026-10-13): one collapsed file group shows the received file count and genuine +/? totals; mixed/unknown baselines explicitly show partial or omit totals. File phases follow actual editing, save validation and successful save, never imply tests were run. Agent disclosure shows each task and actual state plus successful completed/total progress; no fabricated per-worker percentages. Preserve keyed disclosures, focus and code scroll through streaming.

## Desktop unified activity refinement - 2026-10-13

Active desktop decision: group files, actual agents and actual browsing on one neutral glass surface, with borderless sections and one restrained outside edge. Keep independent native disclosure controls and preserve their focus/scroll states. Browsing retains actual source links and its globe; metadata stays outside the cloud on one compact baseline. Reading uses the existing sans font stack, wider letter spacing and more paragraph breathing room. All new activity icons share 14px size and 1.5px strokes. Glass has dedicated light/dark fills and gentle shadows; no colored glows. Disclosure is 200ms, with reduced-motion and no top-tab movement. Preserve pixel branding as the only typographic accent. Evidence: existing live-file captures, native activity lifecycle tests, both themes and narrow-viewport coverage.

Sources follow-up: keep source links in the existing answer footer only. Activity cloud shows the live exploring globe/domain while browsing, and removes that status after browsing completes. Completed/history clouds contain files and agents without a duplicate Sources section.

Activity correction: manual upward scroll pauses following for streamed reasoning and image status updates; following resumes when the user returns to the bottom. File headers have genuine local language SVG icons. Opening a file list keeps a compact content-sized surface (capped at 420px); only visible code/agent output expands up to 680px. New project folders receive short safe names from completed HTML/package titles or the initial build request, with deterministic collision suffixes. Existing project directories and custom names stay unchanged.

Selected polish (Home, file rows, menus): Home uses stable title/project/date columns with 14px session icons, localized dates at right and reserved accessible action slots. Rows highlight only on hover/focus; project filter selection uses quiet text. File activity has one group status, with per-file language/name/diff and line count in the tooltip; unsaved/stopped statuses remain explicit. Desktop menus share 8px panels, 4px items, 6px/8px row padding and 14px thin arrows. Top chat tabs and provider logos retain their existing treatment.
