# AetherAI account setup

The desktop app contains an optional Supabase integration. It does not create a backend automatically. Local memory works without an account; account memory is kept separately and only synced when the user clicks Sync. Memory is not sent with chat requests until the user explicitly enables it for the selected model. Switching models or accounts clears that consent.

On startup, users without a saved session see a centered sign-in screen with Google, email/password, and Continue without an account. A saved authenticated session opens the workspace directly. Registration and optional passwordless sign-in switch to a six-digit code form and temporarily disable resending. The sidebar profile button reopens account settings and provides access to local memory for guests.

## 1. Create the project

For guests, clicking the sidebar profile opens sign-in directly. For authenticated users it opens an upward menu with Account, Presets, Change avatar, and Sign out. The default avatar is the first letter of the email address; a custom PNG/JPEG/WebP is cropped to 128 × 128 and stored on this device separately for each account. Presets are general response preferences with no Personal/Project selector; new and edited presets apply across chats. Existing project-scoped entries retain their stored scope until edited. The existing opt-in for the selected model remains required before preferences are included in a request. Preset files are not encrypted; do not store passwords or API keys in them. Sync explicitly uploads presets to Supabase.

Release builds use the public URL and publishable key from `electron/account-config.js`. For a development override, copy `auth-config.example.json` to `auth-config.json` and replace the values; this ignored local file is not packaged. To use your own backend in release builds, update only the two public values in `electron/account-config.js`. Never put a service-role key, secret key, SMTP password or Google client secret in either file. Database protection depends on RLS, not hiding the publishable key.

## 2. Enable email codes

In Authentication enable the Email provider and keep email confirmation enabled. The entry form supports email/password sign-in, Create account, and an optional email-code sign-in for existing passwordless accounts. Google uses its own sign-in and does not ask for a separate AetherAI password. Passwords are passed to Supabase for authentication and are never saved locally.

In **both Confirm sign up and Magic link or OTP** email templates use the actual OTP token rather than just a link:

```html
<h2>Your AetherAI sign-in code</h2>
<p>{{ .Token }}</p>
<p>If you did not request this code, ignore this email.</p>
```

The app accepts only six-digit email codes. In Authentication → Sign In / Providers → Email, set Email OTP length to 6 and save; then request a new code. Do not shorten an eight-digit code. Set a short expiration (for example 10 minutes), and configure resend and authentication rate limits. The app imposes a 60-second resend cooldown; the server must enforce its own limits as well. No SMTP key is distributed with the desktop.

For a styled AetherAI banner, paste the full contents of `docs/auth-email-template.html` into **both** email bodies instead. Its dark banner contains the live `{{ .Token }}` as selectable text; the logo uses a static image URL with no code in the URL. Image blocking does not hide the code. Use `Your AetherAI verification code` as the subject. Screenshot previews must use a synthetic code, never a live one-time password. Creating a real raster image containing each live code would require a separate private renderer; this template does not do that.

If a confirmation link opens `localhost:3000/#access_token=...`, that is the default Site URL, not the desktop callback. Set Authentication → URL Configuration → Site URL to `https://multimind-ai.pages.dev` and use the code-only email templates above. The website does not import browser tokens into the desktop app; enter the newly delivered code in AetherAI instead. Never share URLs containing access or refresh tokens. Revoke any accidentally shared session in the Supabase dashboard.

For initial tests Supabase's built-in sender only sends to project team addresses and currently allows two messages per hour. For ordinary users, configure **custom SMTP** in Supabase Authentication. Use a verified sender/domain supported by your email service. Put SMTP credentials only in Supabase, not the application. Custom SMTP has its own provider limits and may have costs. [Official SMTP instructions](https://supabase.com/docs/guides/auth/auth-smtp), [OTP instructions](https://supabase.com/docs/guides/auth/auth-email-passwordless).

## 3. Enable Google

If no message appears in Resend, inspect Supabase Logs → Auth for the latest `/signup` or `/resend` response before changing SMTP. A repeated signup for a confirmed account can return an obfuscated successful response without sending mail; sign in to that account instead. AetherAI treats an empty identities list as a possible existing account, without claiming a code was delivered. For an unconfirmed account, password sign-in offers verification and an explicit Resend code action. The app displays readable sending-limit and restricted-default-SMTP errors. Never share logs containing tokens or passwords.

Create a Google OAuth client of type Web Application in Google Cloud. Set its authorized redirect URI to the Supabase callback displayed in the Google provider settings: `https://YOUR_PROJECT.supabase.co/auth/v1/callback`. Configure the consent screen and add test users while the Google application is in testing mode. Put the client ID and client secret into the Supabase Google provider settings and enable it.

Before opening a browser, AetherAI checks the public auth settings. If Google is disabled, it displays a readable error in the sign-in screen. While awaiting browser sign-in, the Google button offers cancellation; no separate password or email code is requested for Google.

The loopback completion page uses a standalone dark AetherAI design, with separate success/failure states and a Close this tab button. Browsers may block closing a tab; the page explains manual closure. No tokens or user email appear in the page. The authorization code is removed from the visible URL, and the response forbids caching, framing, and external resource loads.

In Supabase Authentication URL configuration add exactly:

```text
http://127.0.0.1:43871/callback
```

The desktop opens the system browser. It uses PKCE, receives only an authorization code through this temporary loopback listener, exchanges it in the main process, and stores tokens using Electron secure storage. Port 43871 must be free; the listener closes after success, cancellation or five minutes. The Google callback is the Supabase HTTPS URL, not the desktop loopback address. [Google setup](https://supabase.com/docs/guides/auth/social-login/auth-google).

## 4. Enable optional memory sync

Run `docs/memory-schema.sql` in your project's SQL editor. It enables row-level security: signed-in users can only read/write their own memory rows. Restart the app, sign in, save an account memory, and click Sync. Local guest memories are not automatically uploaded or moved into an account. Project IDs are stored with notes; projects/chats/files themselves are not uploaded by this integration.

## 5. Verify before release

Check a real email code, wrong/expired codes, resend limits, Google completion/cancellation, restart/session refresh, sign-out, and two separate accounts. Ensure each account only sees its own notes and a second device can sync them. Google verification requirements and SMTP delivery depend on your configured services. The repository tests use simulated authentication responses; no live project or delivered email is assumed.
