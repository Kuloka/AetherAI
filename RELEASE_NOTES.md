MultiMind 1.23.0

- Added account sign-in with Google, email/password registration and six-digit email confirmation, plus a styled Google completion page.
- Added response Presets, an upward profile menu, account initials and custom avatars; presets require explicit consent for the selected model.
- Added SambaNova, model details and optional checks, color customization and selectable animated backgrounds.
- Hardened IPC, navigation, renderer CSP, external links, project file boundaries and account-session races.
- Updated Electron and dependencies; dependency audits reported zero known vulnerabilities. Packages use an explicit file allowlist and private files/templates are excluded from Git and installers.
- Added repeatable RLS setup and database audit SQL. The live app table is currently missing/not exposed; production sync requires applying and verifying the server policies.
- Updated six website download links to 1.23.0. Windows installer/portable, macOS Intel/Apple Silicon DMGs, Linux AppImage/deb are built by CI. Packages remain unsigned; macOS is not notarized.

Previous 1.21.0 changes:

- Added OpenRouter, Groq, Gemini and Cerebras connections with encrypted API key storage.
- Added Show all / Only free / Only paid model filters, persistent selection, provider icons, model pricing and reported quota counters.
- Added Local AI mode with independent local/cloud model selection and the local download catalog.
- Made ordinary conversation use a general-purpose assistant prompt; greetings and short messages no longer authorize file creation or start the specialist planner.
- Added readable model errors and separate handling for authentication, billing, request limits and provider overload.
- Fixed temporary OpenRouter in-flight spending holds incorrectly appearing as exhausted account quotas; HTTP-date Retry-After values are now honored.
- Documented verified OpenRouter limits and their API source; quota counters remain based on provider data.
- Updated the website and six download links to 1.21.0; packaged Windows installer/portable, macOS Intel/Apple Silicon DMGs and Linux AppImage/deb.
- Removed a tracked Python cache, excluded developer scripts and branding exports from desktop packages, and expanded syntax checking to every runtime JavaScript file.
- Optimized model filter persistence to save settings without rewriting the full chat history.

macOS packages are unsigned and not notarized. Built-in llama.cpp setup remains Windows-only; cloud providers and Ollama support the other desktop platforms.
