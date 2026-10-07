MultiMind 1.21.0

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
