AetherAI 1.24.4

Composer suggestions now start immediately with a blinking terminal block cursor, without first showing the generic placeholder.

Suggestions use a shuffled queue that persists across app restarts: 140 examples each in English and Russian, and 36 each in the other supported languages. Questions do not repeat until the queue finishes, and adjacent repeats are prevented across cycles.

Each question remains visible for five seconds before erasing. Suggestions disappear while writing or composing text, and reduced motion shows a static example without a blinking cursor.
