AetherAI 1.25.0

- Project code appears while the model is writing it, with the current filename and a localized Writing code status. Supports partial JSON manifests and unfinished Markdown code blocks; unfinished files are previewed without being saved.
- Answers display received text on the next animation frame without an artificial word queue. Named files, long fences and literal think tags inside code retain their exact content.
- Project commands show stdout and stderr while the process is running. Stop preserves received output; late results update the original message without entering a new chat request. Command approval and project boundaries remain unchanged.
- Token counters animate only changed digits. Unchanged digits keep their position and DOM nodes, including when the number gains another digit or grouping separator.
- New Writing code status is translated into all ten supported interface languages.

Windows installer upgrades preserve existing user data. Update downloads and installation require user actions. macOS builds remain unsigned and unnotarized.
