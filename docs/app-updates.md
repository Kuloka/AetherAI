# Notifications and application updates

The Electron interface keeps its existing HTML/CSS. A small React island mounts the supplied notification design in `#notificationsRoot`. Source lives in `components/ui/notifications-5.tsx`; TypeScript aliases and `components.json` provide the shadcn-compatible component structure. `lib/utils.ts` contains `cn`. No framework migration, hosted scripts, stock imagery or sample payment/quota messages are needed.

Run `npm ci`, `npm run check`, and `npm start`. React, TypeScript, Lucide and Tailwind are configured already; a separate shadcn initialization is unnecessary and would risk replacing existing settings. Tailwind utilities use the `n:` prefix and exclude preflight. `npm run build:ui` produces the local, ignored `resources/ui/notifications.js` and `.css`, included by the existing packaging allowlist. Start and distribution scripts build them automatically; CI builds them during `npm run check` before native UI tests and packaging.

Notifications use real application events. Saving a provider key displays confirmation without revealing the key. The application checks for updates at startup and shows an independent reminder when a newer version is available. Download progress, readiness and failures appear in the same notification; there is no update section in Settings. The update UI and saved-key message support all ten application languages. Ordinary event notices disappear after seven seconds; update reminders persist until dismissed or their state changes. Dismissal lasts for the current session; starting the application again checks for the available update again.

## Windows installed applications

`electron/app-updates.js` wraps `electron-updater`. Packaged NSIS builds check the public `Kuloka/AetherAI` GitHub release feed. Download and restart/install each require a user click. Downloads use the updater's integrity verification against release metadata. Errors can be retried. Downgrades and prereleases are disabled. Updating preserves the stable application ID, NSIS GUID and existing user-data storage.

Release packaging now publishes `latest.yml` and `.blockmap` files alongside the Windows installer. Never publish update metadata before its referenced installer has uploaded successfully. The GitHub workflow publishes all artifacts after the package jobs pass. Increase the package version and release a new tag for each update; development builds do not query or install updates.

**Older EXEs cannot acquire updater code remotely.** Users on a release without this module must run one newer NSIS installer first. It upgrades the existing installation; it does not erase chats, keys, projects or downloaded models. Test an actual upgrade between two packaged versions before announcing automatic updates as live. Current unit/native tests simulate release events and intentionally do not replace an installed application.

Portable Windows builds and current macOS/Linux packages check the stable GitHub release version and offer the official download page. They do not overwrite a running executable or claim automatic installation. macOS automatic updating would additionally require signed builds and ZIP update assets; that is outside this implementation.

Native test: `npx electron tests/notifications-smoke.cjs` (Linux: `xvfb-run -a npx electron --no-sandbox tests/notifications-smoke.cjs`).
