MultiMind 1.23.2

- Hide the profile avatar in the collapsed sidebar and close its menu when collapsing; prevent clicks while collapsed.
- Add spacing between background labels and the animation note.
- Apply saved appearance before showing the workspace, eliminating the default background and heading flash at startup.
- Correct cloud Vision capabilities for supported Groq/Gemini models and use provider-reported image modalities when available.
- Tell text-only models that image analysis is unavailable. Image attachments require an explicitly selected Vision model; no automatic switch to another provider.
- Preserve image MIME types in cloud requests and reject unsupported image requests before sending them.

Windows installer/portable, macOS Intel/Apple Silicon DMGs and Linux AppImage/deb are built and checked on native CI runners. Packages remain unsigned; macOS is not notarized. Private configurations and local audit/email drafts are excluded from Git and desktop packages.
