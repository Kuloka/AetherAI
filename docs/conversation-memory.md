# Conversation memory

Direct requests such as “называй меня King”, “call me King”, “отвечай кратко”, and “запомни: я учу Python” save local personal memory. Ordinary conversation, quoted requests and obvious credentials are not captured. A changed preferred name replaces the previous name; repeated unchanged requests do not claim another update. This is explicit rule-based capture, not unrestricted automatic extraction of every fact in an answer.

Successful saves show **Memory updated** inside the assistant message, above its text. The notice persists with chat history. Liking an answer saves a bounded example (up to 120 question characters and 500 answer characters); at most five recent examples are retained. Unliking or disliking removes that example. Selected feedback icons are filled. Examples guide local-model response style; they do not train or modify model weights.

Personal memory is scoped to the current local/account profile and stored separately under `personal-memory`. It is included in requests to local models across chats. It is excluded from cloud-provider prompts, response presets and account synchronization. Cloud sharing remains blocked pending explicit authorization naming the data and destinations. Existing opt-in response presets continue to work as before.

Open **Memory & presets** from the account screen to inspect, edit, disable or delete records, including while signed out. The main process validates requests and only reports an update after the store writes successfully. `memory:local-context` rejects `cloud:` model names; the renderer also excludes cloud models from that retrieval path.

Validation: `npm test`, `npm run check`, `npm run check:security`, and native Electron checks `tests/chat-interactions-smoke.cjs`, `tests/answer-visual-smoke.cjs`, `tests/clipboard-native-smoke.cjs`.
