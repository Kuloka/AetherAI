# Project commands and composer shortcuts

The composer shows `Type / for commands`. Typing `/` opens a full-width menu immediately above the composer. Each row has a distinct vector icon, name and description: `/browse` forces internet search, `/run` executes an exact command in the active project, `/think` increases reasoning for one request, and `/goal` sets a persistent objective for the current conversation. A space after a recognized command replaces its name with that command's removable icon, aligned with the first text line. The request retains the selected action until sent. Arrow keys navigate; Enter or Tab selects without submitting; Escape dismisses. Unsupported slash commands do not submit a request.

The `@ Context` composer menu is removed. Typing `@` is ordinary text and does not fetch or attach saved memory. Existing account memory controls remain separate. `/goal clear` removes the conversation objective. Goals are stored with the chat and included as user context on subsequent requests; they never authorize commands or file writes, and the latest request takes precedence. This does not start autonomous background execution.

Natural requests to run, execute or install something can use the model command planner. /run supplies the exact command and skips that planner. The working directory is fixed to the current project; model tool arguments cannot override it. Every process requires a main-process native confirmation, including in Auto mode. Declined commands do not retry. Plan mode refuses execution.

Commands run with the user's ordinary OS permissions. The project working directory is not an OS sandbox. The confirmation states those permissions and that output is sent to the chosen model. The app uses the installed shell/runtimes, so Node.js, npm, Python or other tools must be available when a command needs them. No new runtime is automatically installed by this feature.

The executor returns the actual exit code and bounded UTF-8 output (65,536 characters). Default timeout is 60 seconds, maximum 120 seconds. Stop cancels pending confirmations and terminates the command process tree; app exit/window destruction cancels owned requests. Results, including failure and cancellation, are retained in expandable chat cards. No command is reported successful before exit 0.

Validation: backend tests execute real commands in disposable project folders and cover approval, rejection, exit codes, output limits, cancellation, timeout and path boundaries. Native tests cover model-selected commands, exact /run, unique icons, upward menu placement and widths, baseline alignment, removal of @ context, /browse, /think, persistent and cleared /goal, light/dark themes and narrow windows. Paid model API calls are simulated.

Implementation references: [Node child processes](https://nodejs.org/api/child_process.html), [Electron cancellable message boxes](https://www.electronjs.org/docs/latest/api/dialog#dialogshowmessageboxwindow-options).

The current goal appears as a compact collapsed tier above the composer. Its summary shows a goal excerpt and accumulated request processing time; clicking reveals the full objective. Work time increases while generation is active and is kept with the conversation. Setting a new goal resets its time.
