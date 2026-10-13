AetherAI 1.25.2

- Restores window dragging with a dedicated title-bar drag area while keeping tabs and controls clickable.
- Unreadable encrypted provider keys no longer crash model loading. Healthy providers continue working; affected connections show a localized reconnect message. Existing encrypted bytes remain untouched until a valid replacement is saved.
- Move to project now uses an accessible project picker instead of an unsupported browser prompt.
- Automatically generated projects are added to Home and linked to their chat only after the first file is successfully saved. Partial generation, Plan mode and failed writes do not create an empty project association.
- Manage models opens Providers from both the model picker and application menu. Removes the duplicate Providers menu action.
- Token counters use static digits under reduced motion without leaving stale animation state.
- Tightens Windows release checks so failed native interface tests stop packaging.

Windows installer upgrades preserve existing user data. Update downloads and installation require user actions. macOS builds remain unsigned and unnotarized.
