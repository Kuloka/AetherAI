# Chat appearance

Claude is a visual reference for reading rhythm and compact controls. The default
visual preset remains AetherAI. Existing user selections and the native colors of
provider logos are preserved. Visual presets do not change the actual model or
provider used for a request.

The home composer is immediately below the greeting. The model selector and send
button are always visible; focus, Escape and New chat never collapse the controls.
Text grows downwards as needed. Menu arrows have a shaft and point in the actual
opening direction. Placeholder suggestions have no artificial second cursor.
In a conversation, the composer returns to its bottom dock. Attachments remain
available and the square send button is at the right edge of the model row.
Quota information is in provider settings and uses only reported API data.

The model menu has a compact heading, a scrollable list with a check on the
selected model, and a thinking-level submenu. Settings → Preferences combines
versions into families such as Claude and ChatGPT, with a native brand icon,
model count, search and one persistent checkbox for the whole family.
Disabled family keys also apply to newly discovered versions of that family.
There are no Free/Paid filters. Saving a checkbox updates the menu without
recreating the preferences list or replaying check animations. Hiding a model does not disconnect its provider or
change an active conversation's model. Its width is
268px and the list is capped at 210px, with scrolling for larger catalogs. Descriptions
and real catalog facts appear in a side tooltip on hover or keyboard focus, with
a viewport-aware fallback on small screens. Updating provider usage does not
rebuild the menu. Menus choose above or below based on the available viewport
space, and their indicator and reveal animation follow that direction. The
thinking submenu is portalled outside the list to avoid clipping. Thinking choices are saved per model; mandatory reasoning
models cannot select the disabled “No thinking” option. Learning mode is removed.

Reading text and UI controls share the installed system sans font. Code and
numeric metadata use the existing monospace stack. No fonts are downloaded.
Green remains limited to switches and optional thin emphasis underlines.
The supplied LiquidButton's rim, turbulence, blur and displacement are integrated
through `components/ui/liquid-glass-button.tsx` and `ui/liquid-glass.tsx`. Native
controls keep their existing handlers; only the background layers are rendered
by React. The supplied displacement filter refracts the light layer while a
separate backdrop blur keeps foreground glyphs clean. This adaptation
uses the existing React and `cn` utility, without adding dependencies. Glass
menus have a solid fallback for increased contrast. Reduced motion disables
expansion transitions, menu reveals and the existing Working shimmer.

Verification: `tests/composer-picker-smoke.cjs` covers focus stability, menu
selection, keyboard, Preferences persistence, per-model thinking, hover facts,
small windows, custom black surface contrast and quota placement.
`tests/style-visual-smoke.cjs` covers all four visual presets in
both themes and interface languages, text contrast, settings, and persistence.

The home screen uses a code-native pixel AetherAI wordmark above the composer. Its reserved aspect ratio keeps the input stable while the name emerges from a horizontal reveal; it never loops. Reduced motion shows the finished name immediately. The extra home logo and rotating motivational headline are replaced by this single brand heading. Model, attachment and send controls remain visible.

The home and sign-in headings use SVG pixel wordmarks. Provider model icons retain their colors. Working has no logo or reserved icon space in any visual preset. The website navigation and download section share the AetherAI pixel asset.

The expanded sidebar shows the native logo and a compact 90px pixel wordmark. The title bar uses a smaller 74px wordmark. A collapsed sidebar shows only its logo; the central pixel heading remains. Working stays text-only.

Catalog polling avoids rebuilding unchanged provider/model/preference lists. Changed model catalogs preserve list scroll positions; focus restoration uses preventScroll. Regression coverage includes scrolling an 80-model catalog before refreshing it.

The empty composer shows a localized command hint ("Type / for commands" in English). A recognized slash command becomes a removable command-specific icon after a space. Metadata uses a 24px row, 4px gaps and 4px spacing before the answer. Preferences have expandable model families with individual checkboxes on the right; multiple selections are retained together and repeated clicks restore models. Family checkboxes control all versions and show partial selection. The model arrow points down/up for a closed/open centered composer and up/down for a closed/open bottom composer. Thinking opens sideways; its arrow exits forwards and fades back in place facing right.

The sidebar starts collapsed and opens with a width transition. On entering the workspace, the AetherAI pixel wordmark first appears as thin outlines revealed from top to bottom, followed by a fill and composer fade within one second. Reduced motion shows the completed interface immediately. Light and dark themes both use translucent glass with a visible rim. Likes still save local feedback preferences but do not create memory notifications. An explicit saved fact uses a temporary Rewriting memory status with a pen icon before the model response.

Home replaces the persistent sidebar. The title bar contains the application menu, Home, and the current workspace. Home uses compact project filters and searchable chat rows. File, View, Window, and Tools submenus contain existing application actions. The completed composer stays hidden before the first startup reveal.

The title bar uses an icon-only Home toggle and browser-style chat tabs. Closing a tab preserves the chat in Home. Text drafts, slash command mode and attachments remain with each chat during the session. Settings sits below the Home project list; the account menu opens by its profile button. Switching chats and creating another chat wait until the current response finishes, preventing a response from being attached to a different chat.
